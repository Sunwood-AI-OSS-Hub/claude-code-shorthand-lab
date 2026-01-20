/**
 * 簡易MCPサーバー（学習用）
 * ……ふふ、MCPの基本を理解するためのシンプルな実装だよ
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// サーバーのインスタンス
const server = new Server(
  {
    name: "learning-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// 計算履歴（メモリストレージ）
type Calculation = {
  a: number;
  b: number;
  operation: string;
  result: number;
  timestamp: string;
};

const history: Calculation[] = [];

// ツールの一覧を返す
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_calculation_history",
        description: "計算履歴を取得します",
        inputSchema: {
          type: "object",
          properties: {
            limit: {
              type: "number",
              description: "取得する件数（省略可）",
            },
          },
        },
      },
      {
        name: "add_calculation",
        description: "新しい計算を履歴に追加します",
        inputSchema: {
          type: "object",
          properties: {
            a: {
              type: "number",
              description: "最初の数",
            },
            b: {
              type: "number",
              description: "次の数",
            },
            operation: {
              type: "string",
              enum: ["add", "subtract", "multiply", "divide"],
              description: "演算の種類",
            },
          },
          required: ["a", "b", "operation"],
        },
      },
      {
        name: "clear_history",
        description: "計算履歴をクリアします",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

// ツールを実行する
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "get_calculation_history": {
      const limit = args?.limit as number | undefined;
      const result = limit ? history.slice(-limit) : history;
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }

    case "add_calculation": {
      const a = args?.a as number;
      const b = args?.b as number;
      const operation = args?.operation as string;

      let result: number;
      switch (operation) {
        case "add":
          result = a + b;
          break;
        case "subtract":
          result = a - b;
          break;
        case "multiply":
          result = a * b;
          break;
        case "divide":
          result = a / b;
          break;
        default:
          throw new Error(`Unknown operation: ${operation}`);
      }

      const calculation: Calculation = {
        a,
        b,
        operation,
        result,
        timestamp: new Date().toISOString(),
      };

      history.push(calculation);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(calculation, null, 2),
          },
        ],
      };
    }

    case "clear_history": {
      history.length = 0;
      return {
        content: [
          {
            type: "text",
            text: "履歴をクリアしました",
          },
        ],
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

// サーバーを起動
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);

  // エラーハンドリング
  process.on("SIGINT", async () => {
    await server.close();
    process.exit(0);
  });
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});

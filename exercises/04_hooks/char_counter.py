#!/usr/bin/env python3
"""Simple character and line counter for text files."""

import sys


def count_file(filepath):
    """Count characters, lines, and words in a file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.count('\n') + (1 if content else 0)
            chars = len(content)
            words = len(content.split())

        print(f"File: {filepath}")
        print(f"  Lines:   {lines}")
        print(f"  Words:   {words}")
        print(f"  Chars:   {chars}")

    except FileNotFoundError:
        print(f"Error: File '{filepath}' not found.")
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python char_counter.py <file_path>")
        sys.exit(1)

    count_file(sys.argv[1])

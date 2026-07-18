#!/bin/bash

CWD=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

which docker >/dev/null || {
  echo "ERROR: Please install Docker first."
  exit 1
}

echo "===== BUILDING =====" && \
  docker build -t autodapp-nextjs . && \
  echo "===== RUNNING =====" && \
  docker run --rm -t -i \
    -p 3000:3000 \
    -v ${CWD}:/code \
    -w /code \
    autodapp-nextjs \
    bash

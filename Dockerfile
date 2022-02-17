FROM node:14.17.0-alpine

ARG WORKDIR
ARG API_URL

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    # コンテナのNuxt.jsをブラウザから参照するために、ip:0.0.0.0に紐付ける
    HOST=0.0.0.0 \
    API_URL=${API_URL}

WORKDIR ${HOME}

# コンテナパッケージをインストール
COPY package*.json ./
RUN yarn install

# コンテナ（現在のディレクトリ）にNuxtプロジェクト一式をコピー
COPY . ./

# 本番環境用にアプリを構築
RUN yarn run build

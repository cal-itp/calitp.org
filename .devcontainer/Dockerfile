FROM python:3.12

ENV USER=calitp
RUN useradd --create-home --shell /bin/bash $USER

ENV WORK_DIR=/home/$USER/site
WORKDIR $WORK_DIR

RUN chown -R $USER $WORK_DIR

# Install mise (to manage Node.js) https://mise.jdx.dev/mise-cookbook/docker.html#docker-image-with-mise
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
ENV MISE_DATA_DIR="/home/$USER/mise"
ENV MISE_CONFIG_DIR="/home/$USER/mise"
ENV MISE_CACHE_DIR="/home/$USER/mise/cache"
ENV MISE_INSTALL_PATH="/usr/local/bin/mise"
ENV MISE_TRUSTED_CONFIG_PATHS=$WORK_DIR
ENV PATH="/home/$USER/mise/shims:$PATH"

RUN curl https://mise.run | sh

RUN apt-get update

# Install Python dependencies
COPY .devcontainer/requirements.txt .devcontainer/requirements.txt
COPY docs/requirements.txt docs/requirements.txt
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r .devcontainer/requirements.txt
RUN pip install --no-cache-dir -r docs/requirements.txt

USER $USER

RUN git config --global --add safe.directory $WORK_DIR

# Install Node.js and npm dependencies
COPY mise.toml mise.toml
COPY .node-version .node-version
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN mise exec -- npm install -g npm@latest
RUN mise exec -- npm clean-install

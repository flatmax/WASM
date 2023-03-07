./tools/autotoolsClean.sh
./autogen.sh
source /usr/local/emsdk/emsdk_env.sh
emconfigure ./configure
emmake make


# WASM

This is a project foundation for C++ and WASM.
The output from the C++ are ES6 WASM modules for nodejs and the browser (loaded through an example webcomonent).
You can test the output for this pacakge using npm : https://www.npmjs.com/package/libwasm
You can test the output for this packaing using nodejs in the nodejs directory.

# Building
## Initial Setup

```
./autogen.sh
```

## standard autotools C++ builds work as expected

```
./autogen.sh
./configure
make
```

## WASM builds

```
./autogen.sh
source /usr/local/emsdk/emsdk_env.sh
emconfigure ./configure
emmake make
```


## installing

It is possible - but you probably don't want to : make install

# Running the nodejs version

./nodejs/WASMTestNode.js

# Running the webcomponent
```
cd webcomponent
npm i
npm start
```

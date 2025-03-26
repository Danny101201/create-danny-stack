#!/usr/bin/env node
import{Command as e}from"commander";var o=new e,n=()=>{o.name("create-danny-stack").description("CLI to some JavaScript string utilities").version("0.8.0").argument("[project-directory]","Project name/directory").option("-y, --yes","Use default configuration").parse();let t=o.opts();console.log(o.args,t)};n();

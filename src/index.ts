import { Command } from "commander";
const program = new Command()
const main = () => {

  program
    .name('create-danny-stack')
    .description('CLI to some JavaScript string utilities')
    .version('0.8.0')
    .argument("[project-directory]", "Project name/directory")
    .option("-y, --yes", "Use default configuration")
    .parse()


  const options = program.opts();
  console.log(program.args, options)
}
main()

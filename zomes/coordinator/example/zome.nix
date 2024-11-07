{ inputs, ... }:

{
  perSystem = { inputs', self', system, ... }: {
    packages.example = inputs.tnesh-stack.outputs.builders.${system}.rustZome {
      workspacePath = inputs.self.outPath;
      crateCargoToml = ./Cargo.toml;
    };

  };
}


{ inputs, ... }:

{
  perSystem = { inputs', self', system, ... }: {
    packages.example =
      inputs.holochain-utils.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
      };

  };
}


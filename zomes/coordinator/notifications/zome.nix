{ inputs, ... }:

{
  perSystem = { inputs', self', system, ... }: rec {
    builders.notifications = { linked_devices_coordinator_zome_name }:
      inputs.holochain-nix-builders.outputs.builders.${system}.rustZome {
        workspacePath = inputs.self.outPath;
        crateCargoToml = ./Cargo.toml;
        zomeEnvironmentVars = {
          LINKED_DEVICES_COORDINATOR_ZOME_NAME =
            linked_devices_coordinator_zome_name;
        };
      };

    packages.notifications = builders.notifications {
      linked_devices_coordinator_zome_name = "linked_devices";
    };
  };
}


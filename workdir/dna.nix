{ inputs, ... }:

{
  perSystem = { inputs', self', lib, system, ... }: {
    packages.notifications_test_dna =
      inputs.holochain-utils.outputs.builders.${system}.dna {
        dnaManifest = ./dna.yaml;
        zomes = {
          # Include here the zome packages for this DNA, e.g.:
          profiles_integrity =
            inputs'.profiles-zome.packages.profiles_integrity;
          profiles = inputs'.profiles-zome.packages.profiles;
          # This overrides all the "bundled" properties for the DNA manifest
          notifications_integrity = self'.packages.notifications_integrity;
          notifications = self'.packages.notifications;

          example_integrity = self'.packages.example_integrity;
          example = self'.packages.example;

          linked_devices_integrity =
            inputs'.linked-devices-zome.packages.linked_devices_integrity;
          linked_devices = inputs'.linked-devices-zome.packages.linked_devices;
        };
      };
  };
}


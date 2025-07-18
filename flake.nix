{
  description = "Template for Holochain app development";

  inputs = {
    nixpkgs.follows = "holonix/nixpkgs";
    holonix.url = "github:holochain/holonix/main-0.5";

    holochain-utils.url = "github:darksoil-studio/holochain-utils/main-0.5";
    holochain-utils.inputs.holonix.follows = "holonix";

    linked-devices-zome.follows = "profiles-zome/linked-devices-zome";
    linked-devices-zome.inputs.holochain-utils.follows = "holochain-utils";
    linked-devices-zome.inputs.holonix.follows = "holonix";

    profiles-zome.url = "github:darksoil-studio/profiles-zome/main-0.5";
    profiles-zome.inputs.holochain-utils.follows = "holochain-utils";
    profiles-zome.inputs.holonix.follows = "holonix";
  };

  nixConfig = {
    extra-substituters = [
      "https://holochain-ci.cachix.org"
      "https://darksoil-studio.cachix.org"
    ];
    extra-trusted-public-keys = [
      "holochain-ci.cachix.org-1:5IUSkZc0aoRS53rfkvH9Kid40NpyjwCMCzwRTXy+QN8="
      "darksoil-studio.cachix.org-1:UEi+aujy44s41XL/pscLw37KEVpTEIn8N/kn7jO8rkc="
    ];
  };

  outputs = inputs:
    inputs.holonix.inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        ./zomes/integrity/notifications/zome.nix
        ./zomes/coordinator/notifications/zome.nix
        ./zomes/integrity/example/zome.nix
        ./zomes/coordinator/example/zome.nix
        # Just for testing purposes
        ./workdir/dna.nix
        ./workdir/happ.nix
        inputs.holochain-utils.outputs.flakeModules.builders
      ];

      systems = builtins.attrNames inputs.holonix.devShells;
      perSystem = { inputs', config, pkgs, system, ... }: {
        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.holochain-utils.devShells.synchronized-pnpm
            inputs'.holonix.devShells.default
          ];

          packages = [
            inputs'.holochain-utils.packages.holochain
            inputs'.holochain-utils.packages.hc-scaffold-zome
            inputs'.holochain-utils.packages.hc-playground
            inputs'.holochain-utils.packages.hc-pilot
          ];
        };
        devShells.npm-ci = inputs'.holochain-utils.devShells.synchronized-pnpm;

        packages.scaffold = pkgs.symlinkJoin {
          name = "scaffold-remote-zome";
          paths = [ inputs'.holochain-utils.packages.scaffold-remote-zome ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/scaffold-remote-zome \
              --add-flags "notifications-zome \
                --integrity-zome-name notifications_integrity \
                --coordinator-zome-name notifications \
                --remote-zome-git-url github:darksoil-studio/notifications-zome \
                --remote-npm-package-name @darksoil-studio/notifications-zome \
                --remote-zome-git-branch main-0.5 \
                --context-element notifications-context \
                --context-element-import @darksoil-studio/notifications-zome/dist/elements/notifications-context.js"
          '';
        };
      };
    };
}

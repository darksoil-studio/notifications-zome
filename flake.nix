{
  description = "Template for Holochain app development";

  inputs = {
    nixpkgs.follows = "holonix/nixpkgs";
    holonix.url = "github:holochain/holonix/main-0.3";

    tnesh-stack.url = "github:darksoil-studio/tnesh-stack/main-0.3";
    playground.url = "github:darksoil-studio/holochain-playground/main-0.3";
    p2p-shipyard.url = "github:darksoil-studio/p2p-shipyard/main-0.3";

    linked-devices.url = "github:darksoil-studio/linked-devices/main-0.3";
    profiles-zome.url = "github:darksoil-studio/profiles-zome/main-0.3";
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
        inputs.tnesh-stack.outputs.flakeModules.builders
      ];

      systems = builtins.attrNames inputs.holonix.devShells;
      perSystem = { inputs', config, pkgs, system, ... }: {
        devShells.default = pkgs.mkShell {
          inputsFrom = [
            inputs'.tnesh-stack.devShells.synchronized-pnpm
            inputs'.holonix.devShells.default
          ];

          packages = [
            inputs'.tnesh-stack.packages.hc-scaffold-zome
            inputs'.playground.packages.hc-playground
            inputs'.p2p-shipyard.packages.hc-pilot
          ];
        };

        packages.scaffold = pkgs.symlinkJoin {
          name = "scaffold-remote-zome";
          paths = [ inputs'.tnesh-stack.packages.scaffold-remote-zome ];
          buildInputs = [ pkgs.makeWrapper ];
          postBuild = ''
            wrapProgram $out/bin/scaffold-remote-zome \
              --add-flags "notifications-zome \
                --integrity-zome-name notifications_integrity \
                --coordinator-zome-name notifications \
                --remote-zome-git-url github:darksoil-studio/notifications-zome \
                --remote-npm-package-name @darksoil-studio/notifications-zome \
                --remote-npm-package-path ui \
                --remote-zome-git-branch main-0.3"
          '';
        };
      };
    };
}

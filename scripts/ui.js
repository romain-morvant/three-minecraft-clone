import { GUI } from "three/addons/libs/lil-gui.module.min.js";

export function createUI(world) {
  const gui = new GUI();

  gui.add(world.size, "width", 8, 128, 1).name("Largeur");
  gui.add(world.size, "height", 8, 64, 1).name("Hauteur");
  gui.add(world, "threshold", 0, 1).name("Noise");

  gui.onChange(() => {
    world.generate();
  });
}

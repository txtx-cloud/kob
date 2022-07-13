
import { AcGameObject } from "./AcGameObject";
export class GameMap extends AcGameObject {
    constructor(ctx, parent) {
        super();

        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;
        this.rows = 13;
        this.cols = 13;

        this.inner_walls_counts = 20;
        this.walls = [];
    }

    start() {

    }

    // create_walls() {
    //     const g = [];
    //     for (let r = 0; r < this.rows; r++) {
    //         g[r] = [];
    //         for (let c = 0; c < this.cols; c++) {
    //             g[r][c] = false;
    //         }
    //     }

    //     for (let r = 0; r < this.rows; r++) {
    //         g[r][0] = g[r][this.cols - 1] = true;
    //     }

    //     for (let c = 0; c < this.cols; c++) {
    //         g[0][c] = g[this.rows - 1][c] = true;
    //     }

    //     for (let i = 0; i < this.inner_walls_counts / 2; i++) {
    //         for (let j = 0; j < 1000; j++) {
    //             let r = parseInt(Math.random() * this.rows);
    //             let c = parseInt(Math.random() * this.cols);
    //             if (g[r][c] || g[c][r]) continue;
    //             if (r == this.rows - 2 && c == 1 || r == 1 && c == this.cols - 2)
    //                 continue;
    //             g[r][c] = g[c][r] = true;
    //             break;
    //         }
    //     }
    // }
    update_size() {
        this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows));
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }
    update() {
        this.update_size();
        this.render();
    }

    render() {
        const color_even = "#AAD751", color_odd = "#A2D149";
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if ((r + c) % 2 == 0) {
                    this.ctx.fillStyle = color_even;
                } else {
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(c * this.L, r * this.L, this.L, this.L);
            }
        }
    }
}
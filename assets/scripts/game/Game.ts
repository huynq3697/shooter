
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    asteroid: cc.Prefab = null;

    indexSpawn: number = 0;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {
        this.schedule(function () {
            this.spawn();
        }.bind(this), 5, cc.macro.REPEAT_FOREVER, 0)
    }

    spawn() {
        let pos = this.node.position;
        let minX = pos.x - cc.winSize.width/2;
        let maxX = pos.x + cc.winSize.width/2;
        let minY = pos.y - cc.winSize.height/2;
        let maxY = pos.y + cc.winSize.height/2;
        
        let posX = cc.Global.randomMinMax(minX, maxX, false);
        let posY = cc.Global.randomMinMax(minY, maxY, false);
        let array = [cc.v2(minX, posY), cc.v2(maxX, posY), cc.v2(posX, minY), cc.v2(posX, maxY)];
        
        this.indexSpawn = (this.indexSpawn == array.length - 1) ? this.indexSpawn = 0 : this.indexSpawn + 1;
        let posRandom = array[this.indexSpawn];

        let asteroid = cc.instantiate(this.asteroid);
        asteroid.position = posRandom;
        this.node.addChild(asteroid);
    }

    // update (dt) {}
}

import {Constant} from "./../common/Constant";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Asteroid extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    onBeginContact(contact, self, other) {
        switch (other.tag) {
            case Constant.TAG.BULLET:
                this.node.destroy();
                other.node.destroy();
                break;
            case Constant.TAG.PLAYER:
                other.node.destroy();
                break;
            default:
                break;
        }
    }

    // update (dt) {}
}

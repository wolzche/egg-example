/*定义全局变量UP，表示方向向上*/
var UP=0;
/*定义全局变量LEFT，表示方向向左*/
var LEFT=1;
/*定义全局变量RIGHT，表示方向向右*/
var RIGHT=2;
/*定义全局变量DOWN，表示方向向下*/
var DOWN=3;
/*初始化方向向右*/
var DIR=RIGHT;
/*初始化分数为0*/
var SCORE=0;
/*游戏是否结束*/
var GAMEOVER=false;
/*等级*/
var LEVEL=1;
/*速度*/
var SPEED=30;
/*最高等级*/
var MAXLEVEL=6;
/*绘画的时间间隔*/
var TIME=200;
/**
 * 贪吃蛇类
 */
function Snake(){
    /**
     * 初始化贪吃蛇
     */
    this.nodes=[];
    this.nodes.push(new Node(20,20));
    this.nodes.push(new Node(20,21));
    this.nodes.push(new Node(20,22));
    this.nodes.push(new Node(20,23));
    this.nodes.push(new Node(21,23));
    this.nodes.push(new Node(22,23));
    this.nodes.push(new Node(23,23));
    this.nodes.push(new Node(23,24));
    this.nodes.push(new Node(23,25));
    this.nodes.push(new Node(23,26));
    /**
     * 判断蛇身是否包含当前坐标
     */
    this.contains=function(x,y){
        for(i=0;i<this.nodes.length;i++){
            var node=this.nodes[i];
            if(node.equals(x,y)){
                return true;
            }
        }
        return false;
    };
    /**
     * 获得一个与蛇身不重合的格子节点
     */
    this.randomFood=function(){
        var x;
        var y;
        do{
            x=Math.floor(Math.random()*50);
            y=Math.floor(Math.random()*50);
        }while(this.contains(x,y));
        return new Node(x,y);
    };
    /**
     *    初始化食物
     */
    this.food=this.randomFood();

    /**
     * 向前走一步
     * 添加头节点
     * 删除尾节点
     */
    this.step=function(){
        var oldHead=this.nodes[0];
        //根据方向计算新头节点
        var newHead;
        switch (DIR){
            case UP:
                newHead=new Node(oldHead.x,oldHead.y-1);
                if(newHead.y==-1){
                    newHead.y=49;
                }
                break;
            case DOWN:
                newHead=new Node(oldHead.x,oldHead.y+1);
                if(newHead.y==50){
                    newHead.y=0;
                }
                break;
            case LEFT:
                newHead=new Node(oldHead.x-1,oldHead.y);
                if(newHead.x==-1){
                    newHead.x=49;
                }
                break;
            case RIGHT:
                newHead=new Node(oldHead.x+1,oldHead.y);
                if(newHead.x==50){
                    newHead.x=0;
                }
                break;
            default:
                break;
        }
        /**
         * 如果吃到自己则结束游戏
         */
        if(this.contains(newHead.x,newHead.y)){
            GAMEOVER=true;
        }
        /**
         * 每走一步，添加新的头节点
         */
        this.nodes.unshift(newHead);
        /**
         * 如果新添加的头节点与食物重合，即吃掉食物，
         * 重新为食物赋值，并且分数加1
         */
        if(newHead.x==this.food.x&&newHead.y==this.food.y){
            this.food=this.randomFood();
            SCORE+=1;
            /*每吃5个食物，则等级加1*/
            if(SCORE%5==0){
                /*最高等级为5*/
                if(LEVEL<MAXLEVEL){
                    LEVEL+=1;
                }
            }
        }else{
            /*如果没有吃掉食物，则删除尾节点*/
            this.nodes.pop();
        }
        //为时间间隔重新赋值
        TIME=200-LEVEL*SPEED;
    };

}
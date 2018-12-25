/**
 * 舞台类
 */
function Stage(){
    this.width=50;
    this.height=50;
    this.snake=new Snake();
    this.print=function(ctx){
        //绘制舞台的背景
        ctx.fillStyle="#abcdef";
        ctx.fillRect(0,0,500,500);
        //绘制一条蛇
        ctx.fillStyle="chartreuse";
        for(i=0;i<this.snake.nodes.length;i++){
            var node=this.snake.nodes[i];
            ctx.fillRect(node.x*10,node.y*10,9,9);
        }
        //绘制食物
        ctx.fillStyle="#0000ff";
        ctx.fillRect(this.snake.food.x*10,this.snake.food.y*10,9,9);
        //绘制分数
        ctx.font="20px 微软雅黑";
        ctx.fillStyle="green";
        ctx.fillText("分数："+SCORE,5,25);
        //绘制等级
        ctx.font="20px 微软雅黑";
        ctx.fillStyle="green";
        ctx.fillText("等级："+LEVEL,100,25);
    }
}

/**
 * 格子类,组成贪吃蛇和舞台
 */
function Node(x,y){
    this.x=x;
    this.y=y;
    /**
     * 比较两个格子是否重合
     */
    this.equals=function(x,y){
        return this.x==x&&this.y==y;
    }
}
"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Food(texture) {
    this.mFood = new TextureRenderable(texture);
    this.mFood.setColor([1, 1, 1, 0]);
    this.mFood.getXform().incRotationByDegree(Math.random() * 360);
    this.mFood.getXform().setPosition(Math.random() * 512 - 256, Math.random() * 512 - 256);
    var weight = Math.ceil(Math.random()*3) + 2;
    this.mFood.getXform().setSize(weight, weight);
    GameObject.call(this, this.mFood);

    var r = new RigidCircle(this.getXform(), weight/2);
    this.setRigidBody(r);
}
gEngine.Core.inheritPrototype(Food, GameObject);


Food.prototype.update = function () {
    GameObject.prototype.update.call(this);
};


Food.prototype.setPos = function(){
    this.mFood.getXform().setPosition(Math.random() * 512 - 256, Math.random() * 512 - 256);
};

Food.prototype.setWeight = function(){
    const weight = Math.ceil(Math.random()*3) + 2;
    this.mFood.getXform().setSize(weight, weight);
};

Food.prototype.getWeight = function(){
    return this.mFood.getXform().getSize()[0];
};

Food.prototype.getFoodRadius = function() {
    return this.mFood.getXform().getHeight()/2;
};


gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects3= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects4= [];
gdjs.Untitled_32sceneCode.GDBlock1Objects1= [];
gdjs.Untitled_32sceneCode.GDBlock1Objects2= [];
gdjs.Untitled_32sceneCode.GDBlock1Objects3= [];
gdjs.Untitled_32sceneCode.GDBlock1Objects4= [];
gdjs.Untitled_32sceneCode.GDBulletObjects1= [];
gdjs.Untitled_32sceneCode.GDBulletObjects2= [];
gdjs.Untitled_32sceneCode.GDBulletObjects3= [];
gdjs.Untitled_32sceneCode.GDBulletObjects4= [];
gdjs.Untitled_32sceneCode.GDPawnObjects1= [];
gdjs.Untitled_32sceneCode.GDPawnObjects2= [];
gdjs.Untitled_32sceneCode.GDPawnObjects3= [];
gdjs.Untitled_32sceneCode.GDPawnObjects4= [];
gdjs.Untitled_32sceneCode.GDPawnRangedObjects1= [];
gdjs.Untitled_32sceneCode.GDPawnRangedObjects2= [];
gdjs.Untitled_32sceneCode.GDPawnRangedObjects3= [];
gdjs.Untitled_32sceneCode.GDPawnRangedObjects4= [];
gdjs.Untitled_32sceneCode.GDSpawnObjects1= [];
gdjs.Untitled_32sceneCode.GDSpawnObjects2= [];
gdjs.Untitled_32sceneCode.GDSpawnObjects3= [];
gdjs.Untitled_32sceneCode.GDSpawnObjects4= [];
gdjs.Untitled_32sceneCode.GDUpObjects1= [];
gdjs.Untitled_32sceneCode.GDUpObjects2= [];
gdjs.Untitled_32sceneCode.GDUpObjects3= [];
gdjs.Untitled_32sceneCode.GDUpObjects4= [];
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects4= [];
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects4= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects4= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPawnObjects1Objects = Hashtable.newFrom({"Pawn": gdjs.Untitled_32sceneCode.GDPawnObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Fall");
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects3Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects3Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects2});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects3 */
gdjs.Untitled_32sceneCode.GDBulletObjects3.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getBehavior("FireBullet").Fire((gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getPointX("BP")), (gdjs.Untitled_32sceneCode.GDPlayerObjects3[i].getPointY("BP")), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects3Objects, 180, 150, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getPointX("BP")), (gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getPointY("BP")), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects2Objects, 0, 150, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects3Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects3Objects, 400, false);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPawnObjects2Objects = Hashtable.newFrom({"Pawn": gdjs.Untitled_32sceneCode.GDPawnObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects2});
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pawn"), gdjs.Untitled_32sceneCode.GDPawnObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPawnObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPawnObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPawnObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPawnObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);
}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects1});
gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("FireBullet").Fire((gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getPointX("BP")), (gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getPointY("BP")), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects2Objects, 180, 150, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getPointX("BP")), (gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getPointY("BP")), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects1Objects, 0, 150, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.Untitled_32sceneCode.GDUpObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDUpObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDUpObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDUpObjects2[k] = gdjs.Untitled_32sceneCode.GDUpObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDUpObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2[k] = gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2[k] = gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FireRoundButton"), gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Untitled_32sceneCode.GDBulletObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPawnObjects2Objects = Hashtable.newFrom({"Pawn": gdjs.Untitled_32sceneCode.GDPawnObjects2});
gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDPawnObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPawnObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPawnObjects1[i].getBehavior("Animation").getAnimationName() == "dead" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPawnObjects1[k] = gdjs.Untitled_32sceneCode.GDPawnObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPawnObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPawnObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPawnObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPawnObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDPawnObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPawnObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPawnObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPawnObjects1[k] = gdjs.Untitled_32sceneCode.GDPawnObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPawnObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Untitled_32sceneCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pawn"), gdjs.Untitled_32sceneCode.GDPawnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBulletObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPawnObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBulletObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDPawnObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPawnObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPawnObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pawn"), gdjs.Untitled_32sceneCode.GDPawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPawnObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPawnObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPawnObjects1[k] = gdjs.Untitled_32sceneCode.GDPawnObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPawnObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPawnObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPawnObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPawnObjects1[i].getBehavior("Animation").setAnimationName("dead");
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList12 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList11(runtimeScene);
}


};gdjs.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), true, "", 1);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pawn"), gdjs.Untitled_32sceneCode.GDPawnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPawnObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPawnObjects1[i].addForceTowardObject((gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), 100, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pawn"), gdjs.Untitled_32sceneCode.GDPawnObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spawn"), gdjs.Untitled_32sceneCode.GDSpawnObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpawnObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpawnObjects1[i].getBehavior("ObjectSpawner").SetSpawnPeriod(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSpawnObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSpawnObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPawnObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList12(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBlock1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlock1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlock1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlock1Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPawnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPawnObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPawnObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPawnObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPawnRangedObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPawnRangedObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPawnRangedObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPawnRangedObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDUpObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDUpObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDUpObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDUpObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects4.length = 0;

gdjs.Untitled_32sceneCode.eventsList13(runtimeScene);
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBlock1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlock1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlock1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlock1Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBulletObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPawnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPawnObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPawnObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPawnObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPawnRangedObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPawnRangedObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPawnRangedObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPawnRangedObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSpawnObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDUpObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDUpObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDUpObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDUpObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFireRoundButtonObjects4.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;

#pragma strict
@script RequireComponent( Rigidbody )

var objSphere : GameObject;
var xAlt = 5;
var yAlt = 2;
var zAlt = 4;

function Start () {
}

function Update () {
	/*if(Input.GetKey ("space"))
	{
		objSphere.transform.position.x += 5;
	}*/

	objSphere.rigidbody.AddForce(xAlt,yAlt,zAlt);
}

function OnCollisionEnter (col : Collision) {
	if(col.gameObject.name == "PLeft")
	{
		xAlt = xAlt * -1;
		//objSphere.rigidbody.AddForce(alternate * -1,0,0);
		//yAlt = yAlt * -1;
	}
	
	if(col.gameObject.name == "PRight")
	{
		xAlt = xAlt * -1;
		//objSphere.rigidbody.AddForce(alternate * -1,0,0);
		//yAlt = yAlt * -1;
	}
	
	if(col.gameObject.name == "Wall")
	{
		zAlt = zAlt * -1;
		//yAlt = yAlt * -1;
	}
	
	if(col.gameObject.name == "Wall2")
	{
		zAlt = zAlt * -1;
		//yAlt = yAlt * -1;
	}
}




var scene,camera,renderer,mesh,meshFloor1,meshFloor2,enemy=[],enemy1=[],enemy2=[];
var meshFloor;
var flyingtop,flyingtop1;
var flyingbottom,flyingbottom1;
var tracks=[],tracks1=[],tracks2=[];
var policeofficer;
var cylinder;
var wires=[];
var sky;
var time;
var go=0;
var a,b;
var nanny=0,nanny1=0;
var temp;
var dead=0;
var count=0;
var wall1;
var suti=0;
var wall2;
var wallsub=[];
var wallsub1=[];
var wallsubtop=[];
var wallsubtop2=[];
var wallsubtop1=[];
var wallsubtop3=[];
var wallsubtop4=[];
var wallsubtop5=[];
var wallsubtop6=[];
var wallsubtop7=[];
var cylinder1;
var cylinder2;
var cylinder3;
var circle=[];
var trains=[];
var d;
var wallsub;
var xoffset,yoffset,zoffset;
var keyboard={};
var score=0;
var player ={height:1.8};
var text2=document.createElement('div');

function init(){
	scene=new THREE.Scene();
	camera=new THREE.PerspectiveCamera(90,1280/720,0.1,1000);
	texture = new THREE.TextureLoader().load('./textures/player.jpg');
	texture1 = new THREE.TextureLoader().load('./textures/lollipop.jpg');
	texture2 = new THREE.TextureLoader().load('./textures/wood.jpg');
	texture3 = new THREE.TextureLoader().load('./textures/train.jpg');
	texture4 = new THREE.TextureLoader().load('./textures/shoe.jpg');
	texture5= new THREE.TextureLoader().load('./textures/track1.jpg');
	texture6=new THREE.TextureLoader().load('./textures/police.jpg');
	texture7=new THREE.TextureLoader().load('./textures/rail2.jpg');
	texture8=new THREE.TextureLoader().load('./textures/bricks.jpg');

	 mesh = new THREE.Mesh(
	        new THREE.BoxGeometry(1,5,0.05),
		    new THREE.MeshBasicMaterial({ map : texture})
		);
		scene.add(mesh);

	    police = new THREE.Mesh(
	        new THREE.BoxGeometry(2,5,0.05),
		    new THREE.MeshBasicMaterial({ map : texture6})
		);
		police.position.set(0,0,mesh.position.z-1);
		scene.add(police);
		
		meshFloor = new THREE.Mesh(
			new THREE.PlaneGeometry(3,2000,10,100),
			//new THREE.MeshBasicMaterial({color:0xA52A2A,wireframe:true})
			new THREE.MeshBasicMaterial({map:texture7})
		);
		meshFloor.position.x=-4;
		meshFloor.position.y=-3;
		meshFloor.rotation.x -= 3.14/2;
		scene.add(meshFloor);
		meshFloor1 = new THREE.Mesh(
			new THREE.PlaneGeometry(3,2000,10,100),
			//new THREE.MeshBasicMaterial({color:0xA52A2A,wireframe:true})
			new THREE.MeshBasicMaterial({map:texture7})
	);

		meshFloor1.position.x=4;
		meshFloor1.position.y=-3;
		meshFloor1.rotation.x -=3.14/2;
		scene.add(meshFloor1);

		meshFloor2 = new THREE.Mesh(
			new THREE.PlaneGeometry(3,2000,10,100),
			//new THREE.MeshBasicMaterial({color:0xA52A2A,wireframe:true})
			new THREE.MeshBasicMaterial({map:texture7})
	);
		meshFloor2.position.x=0;
		meshFloor2.position.y=-3;
		meshFloor2.rotation.x-=3.14/2;
		scene.add(meshFloor2);
		for(var i=0;i<115;i++)
		{
			d=new THREE.Mesh (
					new THREE.CircleGeometry(0.1,64),
					new THREE.MeshBasicMaterial({color:0xffff00}));
			if(i<6)
			{
				zoffset=2*i+35;
				circle.push(d);
				circle[i].position.set(0,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=6 && i<12)
			{
				zoffset=2*(i-6)+75;
				circle.push(d);
				circle[i].position.set(0,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=12 && i<18)
			{
				zoffset=2*(i-12)+115;
				circle.push(d);
				circle[i].position.set(0,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=18&&i<24)
			{
				zoffset=2*(i-18)+155;
				circle.push(d);
				circle[i].position.set(2,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=24 && i<30)
			{
				zoffset=2*(i-24)+195;
				circle.push(d);
				circle[i].position.set(2,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=30 && i<36)
			{
				zoffset=2*(i-30)+235;
				circle.push(d);
				circle[i].position.set(2,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=36&&i<42)
			{
				zoffset=2*(i-36)+275;
				circle.push(d);
				circle[i].position.set(-2,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=42 && i<48)
			{
				zoffset=2*(i-42)+315;
				circle.push(d);
				circle[i].position.set(-2,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=48 && i<54)
			{
				zoffset=2*(i-48)+355;
				circle.push(d);
				circle[i].position.set(-2,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=54 && i<60)
			{
				zoffset=2*(i-54)+395;
				circle.push(d);
				circle[i].position.set(-2,1,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=60 && i<65)
			{
				zoffset=2*(i-60)+95;
				circle.push(d);
				circle[i].position.set(0,3,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=65 && i<70)
			{
				zoffset=2*(i-65)+175;
				circle.push(d);
				circle[i].position.set(2,3,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=70 && i<75)
			{
				zoffset=2*(i-70)+295;
				circle.push(d);
				circle[i].position.set(-2,3,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=75 && i<80)
			{
				zoffset=2*(i-75)+335;
				circle.push(d);
				circle[i].position.set(0,3,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=80 && i<85)
			{
				zoffset=2*(i-80)+375;
				circle.push(d);
				circle[i].position.set(0,3,zoffset);
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=85 && i<100)
			{
				zoffset=2*(i-85)+102;
				circle.push(d);
				circle[i].position.set(2,6,zoffset)
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
			if(i>=100&&i<115)
			{
				zoffset=2*(i-95)+252;
				circle.push(d);
				circle[i].position.set(-2,6,zoffset)
				circle[i].rotation.x+=Math.PI;
				scene.add(circle[i]);
			}
		}
		
		for(var i=0;i<10;i++)
		{
			if(i<3)
			{
				d = new THREE.Mesh(
	    		new THREE.BoxGeometry(0.1,2.5,0.0005),
				new THREE.MeshBasicMaterial({ map : texture2})
				);
				zoffset=40*i+40;
				enemy.push(d);
				enemy[i].position.set(-0.5,0.65,zoffset);
				scene.add(enemy[i]);
			}
			if(i>=3 && i<6)
			{
				d = new THREE.Mesh(
	    		new THREE.BoxGeometry(0.1,2.5,0.0005),
				new THREE.MeshBasicMaterial({ map : texture2})
				);
				zoffset=40*i+40;
				enemy.push(d);
				enemy[i].position.set(1.5,0.65,zoffset);
				scene.add(enemy[i]);
			}
			if(i>=6)
			{
				d = new THREE.Mesh(
	    		new THREE.BoxGeometry(0.1,2.5,0.0005),
				new THREE.MeshBasicMaterial({ map : texture2})
				);
				zoffset=40*i+40;
				enemy.push(d);
				enemy[i].position.set(-2.5,0.65,zoffset);
				scene.add(enemy[i]);
			}
		}

		for(var i=0;i<10;i++)
		{
			if(i<3)
			{
				d = new THREE.Mesh(
	    		new THREE.BoxGeometry(0.1,2.5,0.0005),
				new THREE.MeshBasicMaterial({ map : texture2})
				);
				zoffset=40*i+40;
				enemy1.push(d);
				enemy1[i].position.set(0.5,0.65,zoffset);
				scene.add(enemy1[i]);
			}
			if(i>=3 && i<6)
			{
				d = new THREE.Mesh(
	        	new THREE.BoxGeometry(0.1,2.5,0.0005),
		    	new THREE.MeshBasicMaterial({ map : texture2})
				);
				zoffset=40*i+40;
				enemy1.push(d);
				enemy1[i].position.set(2.75,0.65,zoffset);
				scene.add(enemy1[i]);
			}
			if(i>=6)
			{
				d = new THREE.Mesh(
	    		new THREE.BoxGeometry(0.1,2.5,0.0005),
				new THREE.MeshBasicMaterial({ map : texture2})
				);
				zoffset=40*i+40;
				enemy1.push(d);
				enemy1[i].position.set(-1.25,0.65,zoffset);
				scene.add(enemy1[i]);
			}
		}
		for(var i=0;i<10;i++)
		{
			if(i<3)
			{
				d = new THREE.Mesh(
	        	new THREE.BoxGeometry(2.5,2,0.0005),
		    	new THREE.MeshBasicMaterial({ map : texture1})
				);
				zoffset=40*i+40;
				enemy2.push(d);
				enemy2[i].position.set(0,2.75,zoffset);
				scene.add(enemy2[i]);
			}
			if(i>=3&&i<6)
			{
				d = new THREE.Mesh(
	        	new THREE.BoxGeometry(2.5,2,0.0005),
		    	new THREE.MeshBasicMaterial({ map : texture1})
				);
				zoffset=40*i+40;
				enemy2.push(d);
				enemy2[i].position.set(2.25,2.75,zoffset);
				scene.add(enemy2[i]);
			}
			if(i>=6)
			{
				d = new THREE.Mesh(
	        	new THREE.BoxGeometry(2.5,2,0.0005),
		    	new THREE.MeshBasicMaterial({ map : texture1})
				);
				zoffset=40*i+40;
				enemy2.push(d);
				enemy2[i].position.set(-1.75,2.75,zoffset);
				scene.add(enemy2[i]);
			}
		}
		for(var i=0;i<5;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(1.5,4,10),
		    	new THREE.MeshBasicMaterial({ map : texture3})
			);
			trains.push(d);
			if(i==0)
				trains[0].position.set(0,0,100);
			if(i==1)
				trains[1].position.set(2,0,180);
			if(i==2)
				trains[2].position.set(-2,0,300);
			if(i==3)
				trains[3].position.set(0,0,340);
			if(i==4)
				trains[4].position.set(0,0,380);
			scene.add(trains[i]);
		}
		d = new THREE.Mesh(
	    		new THREE.BoxGeometry(0.1,2.5,0.0005),
				new THREE.MeshBasicMaterial({ map : texture2})
				);
				enemy.push(d);
				enemy[10].position.set(-0.5,0.65,43);
				scene.add(enemy[10]);
		d = new THREE.Mesh(
	        	new THREE.BoxGeometry(2.5,2,0.0005),
		    	new THREE.MeshBasicMaterial({ map : texture1})
				);
				enemy2.push(d);
				enemy2[10].position.set(0,2.75,43);
				scene.add(enemy2[10]);
		d = new THREE.Mesh(
	    		new THREE.BoxGeometry(0.1,2.5,0.0005),
				new THREE.MeshBasicMaterial({ map : texture2})
				);
				enemy1.push(d);
				enemy1[10].position.set(0.5,0.65,43);
				scene.add(enemy1[10]);
		cylinder = new THREE.Mesh(
	        new THREE.CylinderGeometry(0.5,0.25,2),
		    new THREE.MeshBasicMaterial({ map : texture4})
		);
		cylinder.position.set(-2,0,40);
		scene.add(cylinder);
		cylinder1= new THREE.Mesh(
			new THREE.CylinderGeometry(0.5,0.25,0.75),
			new THREE.MeshBasicMaterial({map:texture4}));
		cylinder1.position.set(-2,-1,39.5);
		cylinder1.rotation.x=-3.14/2;
		scene.add(cylinder1);

		cylinder2 = new THREE.Mesh(
	        new THREE.CylinderGeometry(0.5,0.25,2),
		    new THREE.MeshBasicMaterial({ map : texture4})
		);
		cylinder2.position.set(-3.5,0,40);
		scene.add(cylinder2);
		cylinder3= new THREE.Mesh(
			new THREE.CylinderGeometry(0.5,0.25,0.75),
			new THREE.MeshBasicMaterial({map:texture4}));
		cylinder3.position.set(-3.5,-1,39.5);
		cylinder3.rotation.x=-3.14/2;
		scene.add(cylinder3);

		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(3,0.005,1),
		    	new THREE.MeshBasicMaterial({ color:0xF13D16,wireframe:false})
			);
			zoffset=2*i+0;
			tracks.push(d);
			tracks[i].position.set(-4,-3,zoffset);
			scene.add(tracks[i]);
		}
		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(3,0.005,1),
		    	new THREE.MeshBasicMaterial({ color:0xF13D16,wireframe:false})
			);
			zoffset=2*i+0;
			tracks1.push(d);
			tracks1[i].position.set(0,-3,zoffset);
			scene.add(tracks1[i]);
		}
		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(3,0.005,1),
		    	new THREE.MeshBasicMaterial({color:0xF13D16,wireframe:false })
			);
			zoffset=2*i+0;
			tracks2.push(d);
			tracks2[i].position.set(4,-3,zoffset);
			scene.add(tracks2[i]);	
		}	

		flyingtop = new THREE.Mesh(
	        new THREE.CylinderGeometry(0.25,0.25,4),
		    new THREE.MeshBasicMaterial({color:0xDC143C,wireframe:false})
		);
		flyingtop.position.set(4,0,100);
		scene.add(flyingtop);

		flyingbottom = new THREE.Mesh(
			new THREE.CylinderGeometry(0.000005,2,2),
			new THREE.MeshBasicMaterial({map:texture})
		);
		flyingbottom.position.set(4,-2,100);
		scene.add(flyingbottom);

		flyingtop1 = new THREE.Mesh(
	        new THREE.CylinderGeometry(0.25,0.25,4),
		    new THREE.MeshBasicMaterial({color:0xDC143C,wireframe:false})
		);
		flyingtop1.position.set(-4,0,250);
		scene.add(flyingtop1);

		flyingbottom1 = new THREE.Mesh(
			new THREE.CylinderGeometry(0.000005,2,2),
			new THREE.MeshBasicMaterial({map:texture})
		);
		flyingbottom1.position.set(-4,-2,250);
		scene.add(flyingbottom1);
		//console.log(go);
		sky = new THREE.Mesh(
	        new THREE.BoxGeometry(15,0.1,5000),
		    new THREE.MeshBasicMaterial({color:0x00bfff,wireframe:false})
		);
		sky.position.set(0,8,20);
		scene.add(sky);

		wall1 = new THREE.Mesh(
	        new THREE.BoxGeometry(1,10,5000),
		   a=new THREE.MeshBasicMaterial({map:texture8,transparent:true})
		);
		wall1.position.set(-6,2,20);
		scene.add(wall1);
		wall2 = new THREE.Mesh(
	        new THREE.BoxGeometry(1,10,5000),
		    b=new THREE.MeshBasicMaterial({map:texture8,transparent:true})
		);
		wall2.position.set(6,2,20);
		scene.add(wall2);
		for(var i=0;i<1000;i++)
		{
				d = new THREE.Mesh(
	        		new THREE.BoxGeometry(1,7,3),
		    		new THREE.MeshBasicMaterial({color:0x32CD32,wireframe:false})
		    		);
					zoffset=6*i+0;
					wallsub.push(d);
					wallsub[i].position.set(4.7,3,zoffset);
					scene.add(wallsub[i]);
		 }
		 for(var i=0;i<1000;i++)
		 {
		 	d = new THREE.Mesh(
	        		new THREE.BoxGeometry(1,7,3),
		    		new THREE.MeshBasicMaterial({color:0x32CD32,wireframe:false})
		    		);
					zoffset=6*i+0;
					wallsub1.push(d);
					wallsub1[i].position.set(-4.7,3,zoffset);
					scene.add(wallsub1[i]);
		 }
		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(1,1,1),
		    	new THREE.MeshBasicMaterial({color:0xFFFF00,wireframe:false})
			);
			zoffset = 6*(i-1)+1;
			wallsubtop.push(d);
			wallsubtop[i].position.set(4.3,5,zoffset);
			scene.add(wallsubtop[i]);
		}

		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(1,1,1),
		    	new THREE.MeshBasicMaterial({color:0xFF0000,wireframe:false})
			);
			zoffset = 6*(i-1)-1;
			wallsubtop1.push(d);
			wallsubtop1[i].position.set(4.3,5,zoffset);
			scene.add(wallsubtop1[i]);
		}

		
		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(1,1,1),
		    	new THREE.MeshBasicMaterial({color:0xDC143C,wireframe:false})
			);
			zoffset = 6*(i-1)-1;
			wallsubtop2.push(d);
			wallsubtop2[i].position.set(4.3,3,zoffset);
			scene.add(wallsubtop2[i]);
		}

		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(1,1,1),
		    	new THREE.MeshBasicMaterial({color:0xF0E68C,wireframe:false})
			);
			zoffset = 6*(i-1)+1;
			wallsubtop3.push(d);
			wallsubtop3[i].position.set(4.3,3,zoffset);
			scene.add(wallsubtop3[i]);
		}

		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(1,1,1),
		    	new THREE.MeshBasicMaterial({color:0xFFFF00,wireframe:false})
			);
			zoffset = 6*(i-1)+1;
			wallsubtop4.push(d);
			wallsubtop4[i].position.set(-4.3,5,zoffset);
			scene.add(wallsubtop4[i]);
		}

		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(1,1,1),
		    	new THREE.MeshBasicMaterial({color:0xFF0000,wireframe:false})
			);
			zoffset = 6*(i-1)-1;
			wallsubtop5.push(d);
			wallsubtop5[i].position.set(-4.3,5,zoffset);
			scene.add(wallsubtop5[i]);
		}

		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(1,1,1),
		    	new THREE.MeshBasicMaterial({color:0xDC143C,wireframe:false})
			);
			zoffset = 6*(i-1)+1;
			wallsubtop6.push(d);
			wallsubtop6[i].position.set(-4.3,3,zoffset);
			scene.add(wallsubtop6[i]);
		}
		for(var i=0;i<1000;i++)
		{
			d = new THREE.Mesh(
	        	new THREE.BoxGeometry(1,1,1),
		    	new THREE.MeshBasicMaterial({color:0xF0E68C,wireframe:false})
			);
			zoffset = 6*(i-1)-1;
			wallsubtop7.push(d);
			wallsubtop7[i].position.set(-4.3,3,zoffset);
			scene.add(wallsubtop7[i]);
		}
		for(var i=0;i<5;i++)
		{
			d = new THREE.Mesh(
	        new THREE.CylinderGeometry(0.25,0.25,5000),
		    new THREE.MeshBasicMaterial({color:0xDC143C,wireframe:false})
			);
			wires.push(d);
			if(i==0)
			{
				wires[0].position.set(-4,7.5,10);
				scene.add(wires[i]);
				wires[0].rotation.x=-3.14/2;
			}
			if(i==1)
			{
				wires[1].position.set(+4,7.5,10);
				scene.add(wires[1]);
				wires[1].rotation.x=-3.14/2;
			}
			if(i==2)
			{
				wires[2].position.set(3,7.5,10);
				scene.add(wires[2]);
				wires[2].rotation.x=-3.14/2;
			}
			if(i==3)
			{
				wires[3].position.set(-3,7.5,10);
				scene.add(wires[3]);
				wires[3].rotation.x=-3.14/2;
			}
			if(i==4)
			{
				wires[4].position.set(0,7.5,10);
				scene.add(wires[4]);
				wires[4].rotation.x=-3.14/2;
			}
		}
		camera.position.set(0,player.height,-5);
		camera.lookAt(new THREE.Vector3(0,player.height,0));
		renderer=new THREE.WebGLRenderer();
		renderer.setSize(1280,720);
		document.body.appendChild(renderer.domElement);
		document.body.appendChild(text2);

		composer = new THREE.EffectComposer(renderer);
    	var renderPass = new THREE.RenderPass(scene, camera);
    	composer.addPass(renderPass);
    	// color to grayscale conversion
    	var effectGrayScale = new THREE.ShaderPass( THREE.LuminosityShader );
    	effectGrayScale.renderToScreen = true;
    	composer.addPass( effectGrayScale );
		animate();
}
function animate(){
	requestAnimationFrame(animate);
	go=go+1;
	temp=go%100;
	if(temp<20)
	{
		a.opacity=0.2;
		b.opacity=0.2;
	}
	else if(temp>=20&&temp<=40)
	{
		a.opacity=0.4;
		b.opacity=0.4;
	}
	else if(temp>40&&temp<=60)
	{
		a.opacity=0.6;
		b.opacity=0.6;
	}
	else if(temp>60&&temp<=80)
	{
		a.opacity=0.8;
		b.opacity=0.8;
	}
	else
	{
		a.opacity=1;
		b.opacity=1;
	}
	if(keyboard[37]&&mesh.position.x<=2.75){
			mesh.position.x+=0.75;   
	}										//press 'leftarrowkey' to move left
	if(keyboard[39]&&mesh.position.x>=-3){
		mesh.position.x+=-0.75;	  			//press 'rightarrowkey' to move right
    }
    if(mesh.position.x<=-2&&mesh.position.x>=-4&&mesh.position.z>=39.5&&mesh.position.z<=40)
    {
    	cylinder.position.x=-500;
    	cylinder1.position.x=-500;
    	cylinder2.position.x=-500;
    	cylinder3.position.x=-500;
    }
    if(keyboard[32]&&cylinder.position.x<-100&&mesh.position.z<=60)
    	mesh.position.y=7;
    if(keyboard[32]&&cylinder.position.x>-100)
    	mesh.position.y=5;
    if(keyboard[32]&&cylinder.position.x<-100&&mesh.position.z>=60)
    	mesh.position.y=5;
    if(keyboard[82])
    {
    	mesh.rotation.x=3.14/3;
    }
    else
    {
    	for(var j=0;j<=10;j++)
    	{
    		if(mesh.position.z>=enemy2[j].position.z-0.0005&&mesh.position.z<=enemy2[j].position.z+0.0005&&mesh.position.x>=enemy2[j].position.x-1&&mesh.position.x<=enemy2[j].position.x+1)
    		{
    			nanny1=2;
    			count++;
    		}
    	}
    	mesh.rotation.x=0;
    }
    if(nanny1==2&&count==2)
    	nanny++;
    if(nanny>50&&nanny1==2&&count==2)
    {
    	nanny=0;
    	nanny1=0;
    }
    if(count==2&&nanny<50&&nanny1!=0)
    {
    	suti=10;
    }
    if(mesh.position.y>0 && (flyingtop.position.x!=-500||flyingtop1.position.x!=-500))
    	mesh.position.y=mesh.position.y-0.2;
    if(mesh.position.z<=5)
    {
    	police.position.z-=-0.2;
    }
    if(mesh.position.z<=450&&dead==0&&suti!=10)
    {
    	mesh.position.z-=-0.2;
    	camera.position.z-=-0.19;
    }
    for(var i=0;i<115;i++)
    {
    	circle[i].rotation.y=circle[i].rotation.y-3.14/4;
    	if(i<85)
    	{
    		if(mesh.position.x<=circle[i].position.x+1 && mesh.position.x>=circle[i].position.x-1 && mesh.position.z<=circle[i].position.z+0.00000025 && mesh.position.z>=circle[i].position.z-0.00000025)
    		{
    			score=score+10;
    			circle[i].position.x=-500;
    		}
    	}
    	if(i>=85)
    	{
    		if(mesh.position.y<=circle[i].position.y+0.5 && mesh.position.y>=circle[i].position.y-0.5 && mesh.position.z<=circle[i].position.z+0.00000025 && mesh.position.z>=circle[i].position.z-0.00000025)
    		{
    			score=score+10;
    			circle[i].position.x=-500;
    		}
    	}
    }
    if(mesh.position.z<=flyingtop.position.z+1&&mesh.position.z>=flyingtop.position.z-1&&mesh.position.x<=flyingtop.position.x+1&&mesh.position.x>=flyingtop.position.x-1)
    {
    		flyingtop.position.x=-500;
    		flyingbottom.position.x=-500;
    }
    if(mesh.position.z<=flyingtop1.position.z+1&&mesh.position.z>=flyingtop1.position.z-1&&mesh.position.x<=flyingtop1.position.x+1&&mesh.position.x>=flyingtop1.position.x-1){
    	flyingtop1.position.x=-500;
    	flyingbottom1.position.x=-500;
    }
    if(flyingtop.position.x==-500)
    {
    	if(mesh.position.z<=150)
    		mesh.position.y=6;
    	else
    	{
    		if(mesh.position.y>0&&flyingtop1.position.x!=-500)
    			mesh.position.y=mesh.position.y-0.2;
    	}
    }
    else
    {
    	if(mesh.position.y>0)
    		mesh.position.y=mesh.position.y-0.2;
    }
    if(flyingtop1.position.x==-500)
    {
    	if(mesh.position.z<=280)
    		mesh.position.y=6;
    	else
    	{
    		if(mesh.position.y>0)
    			mesh.position.y=mesh.position.y-0.2;
    	}
    }
    else
    {
    	if(mesh.position.y>0)
    		mesh.position.y=mesh.position.y-0.2;
    }
	for(var i=0;i<5;i++)
	{
		if(mesh.position.z>=trains[i].position.z-5&&mesh.position.z<=trains[i].position.z+5&&mesh.position.x>=trains[i].position.x-1.5&&mesh.position.x<=trains[i].position.x+1.5&&mesh.position.y<trains[i].position.y+4)
		{
			mesh.rotation.x=-3.14/2;
			police.position.z=trains[i].position.z-7;
			scene.add(police);
			dead=1;
		}
	}
    flyingtop1.rotation.y-=3.14/4;
    flyingbottom1.rotation.y-=3.14/4;
    flyingtop.rotation.y-=3.14/4;
    flyingbottom.rotation.y-=3.14/4;
    camera.position.y=4;
	text2.style.position='absolute';
	text2.style.width=50;
	text2.style.height=100;
	text2.style.backgroundColor="blue";
	if(mesh.position.z<=450)
	{
		if(dead==1||suti==10)
			text2.innerHTML="YOU LOST THE GAME!!!"
		else
			text2.innerHTML="SCORE: "+score+"!!";
	}
	else
		text2.innerHTML="YOU WON THE GAME AND FINAL SCORE: "+score+"!!";
	text2.style.top=50+'px';
	text2.style.left=50+'px';
	if(keyboard[71])
    	composer.render();
    else
    	renderer.render(scene,camera);
}
function keyDown(event){
	keyboard[event.keyCode]=true;
}
function keyUp(event){
	keyboard[event.keyCode]=false;
}
window.addEventListener('keydown',keyDown);
window.addEventListener('keyup',keyUp);
window.onload=init;

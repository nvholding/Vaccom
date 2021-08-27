import 'package:vaccom/src/Screen/widgets/car_pickup.dart';
import 'package:vaccom/src/Screen/widgets/home_menu.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  var _scaffoldKey = new GlobalKey<ScaffoldState>();
  var _tripDistance = 0;
  @override
  Widget build(BuildContext context) {
    print("build UI");
    return Scaffold(
      key: _scaffoldKey,
      body: Container(
        constraints: BoxConstraints.expand(),
        color: Colors.white,
        child: Stack(
          children: <Widget>[
            Positioned(
              left: 0,
              top: 0,
              right: 0,
              child: Column(
                mainAxisSize: MainAxisSize.max,
                children: <Widget>[
                  AppBar(
                    backgroundColor: Colors.transparent,
                    elevation: 0.0,
                    title: Text(
                      "Vaccom - VFOSSA",
                      style: TextStyle(color: Colors.black),
                    ),
                    leading: FlatButton(
                        onPressed: () {
                          print("click menu");
                        },
                        child: Image.asset("assets/images/ic_menu.png")),
                    actions: <Widget>[Image.asset("assets/images/ic_notify.png")],
                  ),

                ],
              ),
            ),
            Positioned(left: 20,
              right: 20,
              bottom: 40,
              height: 248,
              child: Text(
                "main home"
              ),
            )
          ],
        ),
      ),
      drawer: Drawer(
        child: HomeMenu(),
      ),
    );
  }
}

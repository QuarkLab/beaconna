<!DOCTYPE html>
<html>
<head>
  <title>Beaconna - Inventory</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" type="text/css" href="./assets/css/vendor.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/flat-admin.css">

  <!-- Theme -->
  <link rel="stylesheet" type="text/css" href="./assets/css/theme/blue-sky.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/custom.css">
<!--   <link rel="stylesheet" type="text/css" href="./assets/css/theme/blue.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/theme/red.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/theme/yellow.css"> -->

</head>
<body style="background-color: #282f30; background-image: ('images/bgmask3.png')">
  <div class="container" style="background-color: #272727; margin-top: 50px;">
    <div class="heading" style="margin-top: 10px;">Settings</div>
    <!-- <div class="col-md-12" style="margin-top: 20px;">
        <table border="1" class="col-md-12" style="color: whitesmoke;">
          <th class="col-md-2" style="font-size: 24px;">
            Name
          </th>
          <th class="col-md-8" style="font-size: 24px;">
            Description
          </th>
          <th class="col-md-4" style="font-size: 24px;">
            Price
          </th>
          <tr>
            <td>Iphone 6s</td>
            <td>iPhone 6S and iPhone 6S Plus (stylized and marketed as iPhone 6s and iPhone 6s Plus) are smartphones designed, developed and marketed by Apple Inc. They were announced on September 9, 2015, at the Bill Graham Civic Auditorium in San Francisco by Apple CEO Tim Cook, with pre-orders beginning September 12 and official release on September 25, 2015. The iPhone 6S and 6S Plus were succeeded by the iPhone 7 and iPhone 7 Plus in September 2016.</td>
            <td>Rs : 102, 000/=</td>
          </tr>
        </table>
    </div> -->
    <div class="row">
    <div class="col-xs-12" style="margin-top: 20px;">
      <div class="">
              <div class="card-body">
                <div class="row">
        <div class="col-md-12">
      <div>

<?php
  $sett = array(
    "Published",
    "Dark Theme",
    "Notifications",
    "Allow Pre-orderings",
    "Extend Subscription"
  );

  foreach ($sett as $s) {
    echo "<label class='switch'>";
    echo "<input type='checkbox' checked>";
    echo "<span class='slider round'></span>";
    echo "<span class='sett-text'>$s</span>
  </label> ";
    // if (stripos($sett, $s) == 2){
    //   echo "<br>";
    // }
  }


 ?>




<br>
<br>
          </div>
<!--
<?php
  // $sett = array("Notifications", "Allow pre-orders");
  // foreach ($sett as $s) {
  //   echo ""
  // }

 ?>


          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>

          <li>
item 1
          </li>
<li>item 2</li>


 -->




        </div>
      </div>
              </div>
            </div>

    </div>
        <!-- Trigger the modal with a button -->



    <!-- <div class="col-md-6">
        <div class="">
          <div class="heading">
            <h1>Inventory</h1>
          </div>
          <div class="card-body">
            <form class="form form-horizontal">
              <div class="section">
                <div class="section-title"><text class="white">Information</text></div>
                <div class="section-body">
                  <div class="form-group">
                    <label class="col-md-3 control-label white">Name</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" placeholder="">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-3">
                      <label class="control-label white">Description</label>
                    </div>
                    <div class="col-md-9">
                      <textarea class="form-control"></textarea>
                      <p class="control-label-help white">( short detail of products , 150 max words )</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-3 control-label white">Price</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-addon">$</span>
                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-3 control-label white">Tags</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" placeholder="">
                      <p class="control-label-help white">( Enter tags for searching efficiency, seperated by commas )</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-footer">
                <div class="form-group">
                  <div class="col-md-9 col-md-offset-3">
                    <button type="submit" class="btn btn-primary">Add Item</button>
                    <button type="reset" class="btn btn-default">Reset</button>
                  </div>
                </div>
              </div>
          </form>
          </div>
        </div> -->
  </div>


<style>
.sett-text {
  position: relative;
  display: inline-block;
  font-size: 20px;
  vertical-align: middle;
  margin-left: 90px;
  color: #ddddee;
}

.switch {
  position: relative;
  display: inline-block;
  width: 600px;
  height: 34px;
  margin: 5px;
}

.switch input {
  display:none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
  width: 60px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

    <script type="text/javascript" src="./assets/js/vendor.js"></script>
  <script type="text/javascript" src="./assets/js/app.js"></script>
</body>
</html>

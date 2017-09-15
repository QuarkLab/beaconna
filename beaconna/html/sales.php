<?php
  // require('query.php');
  require('dbcon.php');

  $sql = "SELECT * FROM ads ORDER BY ad_date";

  $res = mysqli_query($conn,$sql);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Beaconna - Advertistments</title>
  
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" type="text/css" href="./assets/css/vendor.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/flat-admin.css">

  <!-- Theme -->
  <link rel="stylesheet" type="text/css" href="./assets/css/theme/blue-sky.css">
  <link rel="stylesheet" type="text/css" href="./assets/css/custom.css">
</head>
<body style="background-color: #282f30; background-image: ('images/bgmask3.png');">
  <div class="container sales-card" style="background-color: #272727; margin-top: 50px; padding-top: 20px; padding-bottom: 20px;">
    <div class="col-md-3">
      <div class="card card-mini" style="">
        <div class="card-header">
          Card Mini
        </div>
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
        </div>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card card-mini" style="">
        <div class="card-header">
          Card Mini
        </div>
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
        </div>
      </div>
    </div>

    <div class="col-md-3" style="margin-top: 5px;">
      <div class="card card-mini" style="">
        <div class="card-header">
          Card Mini
        </div>
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
        </div>
      </div>
    </div>

    <div class="col-md-3" style="margin-top: 5px;">
      <div class="card card-mini" style="">
        <div class="card-header">
          Card Mini
        </div>
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12" style="margin-top: 20px;">
      <div class="card card-banner" style="height: 100%; width: 100%;">
        <div class="card-header">
          <h2>Sales Chart</h2>
        </div>
        <div class="card-body no-padding" style="background-color: #21b0b7;">
          <div class="ct-chart-sale"></div>
        </div>
      </div>
    </div>
  </div>

    <script type="text/javascript" src="./assets/js/vendor.js"></script>
  <script type="text/javascript" src="./assets/js/app.js"></script>
</body>
</html>
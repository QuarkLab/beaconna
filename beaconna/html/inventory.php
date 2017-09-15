<?php
  // require('query.php');
  require('dbcon.php');

  $sql = "SELECT * FROM items ORDER BY item_no";

  $res = mysqli_query($conn,$sql);
?>

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
    <div class="heading" style="margin-top: 10px;">Inventory</div>
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
          <table class="table table-striped table-bordered table-hover custom-tbl">
            <thead>
              <tr style="background-color: #dfe6e8;">
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1000</td>
                <td>Apple iPhone 8</td>
                <td>iPhone 8 is the newest edition of Apple iPhone series ....</td>
                <td>Rs : 155 000/=</td>
              </tr>
              <tr style="background-color: white;">
                <td>1001</td>
                <td>Sony PS4</td>
                <td>Into the gaming? Try PS4 for sure to ultimate your gaming experieince ....</td>
                <td>Rs : 77 000/=</td>
              </tr>
              <tr>
                <td>1002</td>
                <td>Acer E5 Laptop</td>
                <td>Acer E5 Laptop Series with Core i5 Processor .....</td>
                <td>Rs : 87 000/=</td>
              </tr>
              <tr style="background-color: white;">
                <td>1003</td>
                <td>Apple iPod</td>
                <td>Experience the music in your ears a better way ....</td>
                <td>RS : 55 000/=</td>
              </tr>
              <?php
                foreach($res as $item){
                  echo "<tr>";
                  echo "<td>";
                  echo $item['item_no'];
                  echo "</td>";
                  echo "<td>";
                  echo $item['item_name'];
                  echo "</td>";
                  echo "<td>";
                  echo $item['item_desc'];
                  echo "</td>";
                  echo "<td>Rs : ";
                  echo $item['item_price'];
                  echo "/=</td>";
                  echo "</tr>";
                }
              ?>
            </tbody>
          </table>
        </div>
      </div>
              </div>
            </div>
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style="position : absolute; right: 0; border-radius: 50px; margin-top: 10px;">+</button>
    </div>
        <!-- Trigger the modal with a button -->

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog" style="border-radius: 25px;">
  <div class="modal-dialog" style="border-radius: 25px;">
    <!-- Modal content-->
    <div class="" style="border-radius: 25px;">
          <div class="heading">
          </div>
          <div class="card-body" style="background-color: #272727; padding: 30px;">
            <form class="form form-horizontal" action="add_item.php" method="POST">
              <div class="section">
                <div class="section-title"><text class="white"><h3>Add Items</h3></text></div>
                <div class="section-body">
                  <div class="form-group">
                    <label class="col-md-3 control-label white">No</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" placeholder="" name="item_no">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-3 control-label white">Name</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" placeholder="" name="item_name">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-3">
                      <label class="control-label white">Description</label>
                    </div>
                    <div class="col-md-9">
                      <textarea class="form-control" name="item_desc"></textarea>
                      <p class="control-label-help white">( short detail of products , 150 max words )</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-3 control-label white">Price</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-addon">$</span>
                        <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)" name="item_price">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-3 control-label white">Tags</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" placeholder="" name="item_tags">
                      <p class="control-label-help white">( Enter tags for searching efficiency, seperated by commas )</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-footer">
                <div class="form-group">
                  <div class="col-md-9 col-md-offset-3">
                    <button type="submit" class="btn btn-primary">Add Item</button>
                    <button type="reset" class="btn btn-default" style="margin-left: 20px;">Reset</button>
                  </div>
                </div>
              </div>
          </form>
          </div>
    
</div>
    </div>
    </br>
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

    <script type="text/javascript" src="./assets/js/vendor.js"></script>
  <script type="text/javascript" src="./assets/js/app.js"></script>
</body>
</html>
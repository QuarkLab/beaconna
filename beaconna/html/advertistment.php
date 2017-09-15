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
<body style="background-color: #282f30; background-image: ('images/bgmask3.png')">
  <div class="container" style="background-color: #272727; margin-top: 50px;">

    <div class="heading" style="margin-top: 10px;">Advertistments</div>
    <div class="row">
    <div class="col-xs-12" style="margin-top: 20px;">
      <div class="">
              <div class="card-body">
                <div class="row">
        <div class="col-md-12">
          <table class="table table-striped table-bordered table-hover custom-tbl">
            <thead>
              <tr style="background-color: #dfe6e8;">
                <th>Advertistment ID</th>
                <th>Advertistment Topic</th>
                <th>Advertistment Content</th>
                <th>Advertistment Date</th>
              </tr>
            </thead>
            <tbody>
              <?php
                foreach($res as $item){
                  echo "<tr>";
                  echo "<td>";
                  echo $item['ad_no'];
                  echo "</td>";
                  echo "<td>";
                  echo $item['ad_topic'];
                  echo "</td>";
                  echo "<td>";
                  echo $item['ad_desc'];
                  echo "</td>";
                  echo "<td>Rs : ";
                  echo $item['ad_date'];
                  echo "</td>";
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
            <form class="form form-horizontal" action="add_advertistments.php" method="POST">
              <div class="section">
                <div class="section-title"><text class="white"><h3>Add Advertistment</h3></text></div>
                <div class="section-body">
                  <div class="form-group">
                    <label class="col-md-3 control-label white">No</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" placeholder="" name="ad_no">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-3 control-label white">Advertistment Topic</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" placeholder="" name="ad_topic">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-3">
                      <label class="control-label white">Advertistment Content</label>
                    </div>
                    <div class="col-md-9">
                      <textarea class="form-control" name="ad_content"></textarea>
                      <p class="control-label-help white">( short detail of products , 150 max words )</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-3 control-label white">Advertistment Date</label>
                    <div class="col-md-3">
                      <div class="input-group">
                        <select name="date" class="form-control">
                            <option selected="selected">Date</option>
                          <?php
                            for($i=1;$i<31;$i++){
                              echo "
                                  <option>$i</option>
                              ";
                            }
                          ?>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="input-group">
                        <select name="month" class="form-control">
                          <option selected="selected">Month</option>
                          <?php
                            for($i=1;$i<13;$i++){
                              echo "
                                  <option>0$i</option>
                              ";
                            }
                          ?>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="input-group">
                        <select name="year" class="form-control">
                          <option selected="selected">Year</option>
                          <?php
                            for($i=2016;$i<2020;$i++){
                              echo "
                                  <option>$i</option>
                              ";
                            }
                          ?>
                        </select>
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
  </div>

    <script type="text/javascript" src="./assets/js/vendor.js"></script>
  <script type="text/javascript" src="./assets/js/app.js"></script>
</body>
</html>
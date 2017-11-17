<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="col-md-12">
                <div class="">
                    <div class="card-header" data-background-color="purple">
                        <h4 class="title">View Advertisements</h4>
                        <p class="category">View advertisements added from your shop</p>
                    </div>
                    <br>
                    <?php foreach ($ad as $a): ?>
                    <div class="jumbotron">
                        <div class="row">
                            <h3 ><?php echo $a['name'];?></h3>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-3">
                                <img style="height:100px; width:200px" src="<?php echo base_url();?>assets/img/logo.png" />
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-8">
                                <p class="text-justify" style="font-size: medium"><?php echo $a['description'];?></p>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary pull-right">Edit</button>
                        <br>
                    </div>
                    <?php endforeach; ?>

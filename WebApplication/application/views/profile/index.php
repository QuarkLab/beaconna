<div class="row">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header" data-background-color="purple">
                <h4 class="title">Edit Profile</h4>
                <p class="category">Complete Shop Profile</p>
            </div>
            <div class="card-content">
                <form>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group label-floating">
                                <label class="control-label"><?php echo $company; ?></label>
                                <input type="text" class="form-control" disabled>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group label-floating">
                                <label class="control-label">Username</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group label-floating">
                                <label class="control-label">Email address</label>
                                <input type="email" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group label-floating">
                                <label class="control-label">Owner's Name</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group label-floating">
                                <label class="control-label">Adress</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group label-floating">
                                <label class="control-label">City</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group label-floating">
                                <label class="control-label">Country</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group label-floating">
                                <label class="control-label">Postal Code</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>About Shop</label>
                                <div class="form-group label-floating">
                                    <label class="control-label"> </label>
                                    <textarea class="form-control" rows="3"> This company will provide any retail goods in your prefered brand</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card card-profile">
            <div class="card-avatar">
                <a href="#pablo">
                    <img class="img" src="<?php echo base_url();?>assets/img/logo.png" />
                </a>
            </div>
            <div class="content">
                <h4 class="card-title"><?php echo $company; ?></h4>
                <p class="card-content">
                    This company will provide any retail goods in your prefered brand.
                </p>
            </div>
        </div>
    </div>
</div>
</div>
</div>
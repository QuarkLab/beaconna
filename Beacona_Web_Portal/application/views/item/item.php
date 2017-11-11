<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="col-md-12">
                <div class="">
                    <div class="card-header" data-background-color="purple">
                        <h4 class="title">Add Item</h4>
                        <p class="category">Add New Item</p>
                    </div>
                    <div class="card-content">
                        <form method="POST" action="<?php echo base_url(); ?>index.php/Item/add_item"
                              enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-md-8" style="">
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label">Item Name</label>
                                        <input type="text" name="item_name" class="form-control">
                                        <span class="material-input"></span>
                                    </div>
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label">Item Description</label>
                                        <textarea name="item_desc" class="form-control tagarea" rows="5"></textarea>
                                        <span class="material-input"></span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                                        <div class="">
                                            <img src="<?php echo base_url(); ?>assets/img/avatar-placeholder.png"
                                                 alt="..." style="width: 120px;">
                                        </div>
                                        <span class="btn btn-raised btn-round btn-default btn-file">
                                            <span class="fileinput-new">Add Photo</span>
                                        <span class="fileinput-exists">Change</span>
                                        <input type="file" name="userfile" size="20"/></span>
                                        <br/>
                                        <a href="#pablo" class="btn btn-danger btn-round fileinput-exists"
                                           data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6" style="">
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label">Item Tags</label>
                                        <input type="text" name="item_tags" class="form-control">
                                        <span class="material-input"></span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group label-floating is-empty">
                                        <label class="control-label">Item Price</label>
                                        <input type="number" name="item_price" class="form-control">
                                        <span class="material-input"></span>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary pull-right">Add Item</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        //var tagArea = '.tag-area';
        var backSpace;
        var close = '<a class="close"></a>';
        var PreTags = $('.tagarea').val().trim().split(" ");

        $('.tagarea').after('<ul class="tag-box"></ul>');

        for (i = 0; i < PreTags.length; i++) {
            $('.tag-box').append('<li class="tags">' + PreTags[i] + close + '</li>');
        }

        $('.tag-box').append('<li class="new-tag"><input class="input-tag" type="text"></li>');

        // Taging
        $('.input-tag').bind("keydown", function (kp) {
            var tag = $('.input-tag').val().trim();
            $(".tags").removeClass("danger");
            if (tag.length > 0) {
                backSpace = 0;
                if (kp.keyCode == 13) {
                    $(".new-tag").before('<li class="tags">' + tag + close + '</li>');
                    $(this).val('');
                }
            }

            else {
                if (kp.keyCode == 8) {
                    $(".new-tag").prev().addClass("danger");
                    backSpace++;
                    if (backSpace == 2) {
                        $(".new-tag").prev().remove();
                        backSpace = 0;
                    }
                }
            }
        });
        //Delete tag
        $(".tag-box").on("click", ".close", function () {
            $(this).parent().remove();
        });
        $(".tag-box").click(function () {
            $('.input-tag').focus();
        });
        // Edit
        $('.tag-box').on("dblclick", ".tags", function (cl) {
            var tags = $(this);
            var tag = tags.text().trim();
            $('.tags').removeClass('edit');
            tags.addClass('edit');
            tags.html('<input class="input-tag" value="' + tag + '" type="text">')
            $(".new-tag").hide();
            tags.find('.input-tag').focus();

            tag = $(this).find('.input-tag').val();
            $('.tags').dblclick(function () {
                tags.html(tag + close);
                $('.tags').removeClass('edit');
                $(".new-tag").show();
            });

            tags.find('.input-tag').bind("keydown", function (edit) {
                tag = $(this).val();
                if (edit.keyCode == 13) {
                    $(".new-tag").show();
                    $('.input-tag').focus();
                    $('.tags').removeClass('edit');
                    if (tag.length > 0) {
                        tags.html(tag + close);
                    }
                    else {
                        tags.remove();
                    }
                }
            });
        });
        // sorting
        $(function () {
            $(".tag-box").sortable({
                items: "li:not(.new-tag)",
                containment: "parent",
                scrollSpeed: 100
            });
            $(".tag-box").disableSelection();
        });


    </script>
</div>
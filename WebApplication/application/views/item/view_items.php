<div class="row">
    <div class="col-md-12"></div>
        <div class="card">
            <div class="card-header" data-background-color="purple">
                <h4 class="title">View Items</h4>
                <p class="category">Here's your shop's items that are on the beacona app</p>
            </div>
            <div class="card-content table-responsive">
                <table class="table">
                    <thead class="text-primary">
                    <tr>
                        <th>Item Id</th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Item Description</th>
                        <th>Item Price</th>
                        <th>Item Qty</th>
<!--                        <th>Item Tags</th>-->
                    </tr></thead>
                    <tbody>
                    <?php
                        $base = base_url();
                        $base = $base.'assets/uploads/';
                        foreach ($items as $item){
                            echo "<tr>";
                            echo "<td>$item->id</td>";
                            echo "<td><img src='$base$item->image' style='width: 70px;' </td>";
                            echo "<td>$item->name</td>";
                            echo "<td>$item->description</td>";
                            echo "<td>$item->base_price</td>";
                            echo "<td>$item->quantity</td>";
                        }
                    ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
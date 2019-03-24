import React, { Component, Fragment } from "react";
import { TextField, Button, Grid, Chip } from "@material-ui/core";
class AddProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("[IN ADDProducts]", this.props);
  }
  render() {
    return (
      <Fragment>
        <Grid container direction="column">
          <Grid item>
            <TextField
              fullWidth
              id="productName"
              label="Product Name"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="productDescription"
              label="Product Description"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="cartUrl"
              label="Cart Url"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="price"
              label="Price"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="offers"
              label="Offers"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="promoCode"
              label="Promo Code"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="size"
              label="Size"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="color"
              label="Color"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            {/* <TextField
              renderValue={() => (
                <div>
                  <Chip key={1} label={"ark"} />
                </div>
              )}
              id="productTags"
              label="Product Tags"
              margin="normal"
              variant="outlined"
            /> */}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default AddProduct;

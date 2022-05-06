import React from "react";

export default function PaymentResend() {
  return (
    <form
      class="form-horizontal"
      role="form"
      action="<?php echo base_url('index.php/register/resendPaymentProcess'); ?>"
      method="POST"
      enctype="multipart/form-data"
    >
      <div class="form-group">
        <label>Email :</label>
        <input type="email" name="email" class="form-control" required="" />
      </div>
      <div class="form-group">
        <label>Date Of Birth (A.D) : </label>
        <input
          type="date"
          name="dateofbirthad"
          class="form-control"
          required=""
        />
      </div>
      <input type="submit" name="submit" class="btn btn-primary" />
    </form>
  );
}

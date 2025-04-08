const ShippingPolicy = () => {
  return (
    <div className="mt-32">
      <div className="bg-white p-8 text-center border mb-4">
        <h1 className="text-4xl font-semibold mb-2">Shipping Policy</h1>
        <span className="text-gray-600">Last Updated on April 08, 2025</span>
      </div>
      <div className="bg-accent py-8 md:px-16 px-4">
        <div className="flex flex-col gap-6 bg-white md:px-8 px-4 py-6 border">
          <div className="flex flex-col gap-4">
            <h4>
              <strong>Shipping Policy</strong>
            </h4>
            <p>
              The orders for the user are shipped through registered domestic
              courier companies and/or speed post only. Orders are shipped
              within 4 days from the date of the order and/or payment or as per
              the delivery date agreed at the time of order confirmation and
              delivering of the shipment, subject to courier company/post office
              norms.
            </p>
            <p>
              Platform Owner shall not be liable for any delay in delivery by
              the courier company/postal authority. Delivery of all orders will
              be made to the address provided by the buyer at the time of
              purchase.
            </p>
            <p>
              Delivery of our services will be confirmed on your email ID as
              specified at the time of registration. If there are any shipping
              cost(s) levied by the seller or the Platform Owner (as the case
              may be), the same is not refundable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;

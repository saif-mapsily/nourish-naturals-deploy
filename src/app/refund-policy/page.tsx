const RefundCancellationPolicy = () => {
  return (
    <div className="mt-32">
      <div className="bg-white p-8 text-center border mb-4">
        <h1 className="text-4xl font-semibold mb-2">
          Refund and Cancellation Policy
        </h1>
        <span className="text-gray-600">Last Updated on April 08, 2025</span>
      </div>
      <div className="bg-accent py-8 md:px-16 px-4">
        <div className="flex flex-col gap-6 bg-white md:px-8 px-4 py-6 border">
          <div className="flex flex-col gap-4">
            <h4>
              <strong>Introduction</strong>
            </h4>
            <p>
              This refund and cancellation policy outlines how you can cancel or
              seek a refund for a product/service that you have purchased
              through the Platform. Under this policy:
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4>
              <strong>Cancellation Policy</strong>
            </h4>
            <ul className="list-disc list-outside pl-8">
              <li>
                Cancellations will only be considered if the request is made
                within 3 days of placing the order. However, cancellation
                requests may not be entertained if the orders have been
                communicated to such sellers/merchant(s) listed on the Platform
                and they have initiated the process of shipping them, or the
                product is out for delivery. In such an event, you may choose to
                reject the product at the doorstep.
              </li>
              <li>
                NOURISH NATURALS does not accept cancellation requests for
                perishable items like flowers, eatables, etc. However, the
                refund/replacement can be made if the user establishes that the
                quality of the product delivered is not good.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4>
              <strong>Refund Policy</strong>
            </h4>
            <ul className="list-disc list-outside pl-8">
              <li>
                In case of receipt of damaged or defective items, please report
                to our customer service team. The request would be entertained
                once the seller/merchant listed on the Platform has checked and
                determined the same at its own end. This should be reported
                within 3 days of receipt of products.
              </li>
              <li>
                In case you feel that the product received is not as shown on
                the site or as per your expectations, you must bring it to the
                notice of our customer service within 3 days of receiving the
                product. The customer service team, after looking into your
                complaint, will take an appropriate decision.
              </li>
              <li>
                In case of complaints regarding the products that come with a
                warranty from the manufacturers, please refer the issue to them.
              </li>
              <li>
                In case of any refunds approved by NOURISH NATURALS, it will
                take 3 days for the refund to be processed to you.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;

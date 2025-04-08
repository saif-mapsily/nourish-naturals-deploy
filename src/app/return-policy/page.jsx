const ReturnPolicy = () => {
  return (
    <div className="mt-32">
      <div className="bg-white p-8 text-center border mb-4">
        <h1 className="text-4xl font-semibold mb-2">Return Policy</h1>
        <span className="text-gray-600">Last Updated on April 08, 2025</span>
      </div>
      <div className="bg-accent py-8 md:px-16 px-4">
        <div className="flex flex-col gap-6 bg-white md:px-8 px-4 py-6 border">
          <div className="flex flex-col gap-4">
            <h4>
              <strong>Introduction</strong>
            </h4>
            <p>
              We offer refund/exchange within the first 7 days from the date of
              your purchase. If 7 days have passed since your purchase, you will
              not be offered a return, exchange, or refund of any kind.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4>
              <strong>Eligibility for Returns or Exchanges</strong>
            </h4>
            <p>In order to become eligible for a return or an exchange:</p>
            <ul className="list-disc list-outside pl-8">
              <li>
                The purchased item should be unused and in the same condition as
                you received it.
              </li>
              <li>The item must have original packaging.</li>
              <li>
                If the item that you purchased was on a sale, then the item may
                not be eligible for a return/exchange.
              </li>
              <li>
                Only such items are replaced by us (based on an exchange
                request) if such items are found defective or damaged.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4>
              <strong>Exemptions</strong>
            </h4>
            <p>
              You agree that there may be a certain category of products/items
              that are exempted from returns or refunds. Such categories of the
              products would be identified to you at the time of purchase.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4>
              <strong>Process for Returns/Exchanges</strong>
            </h4>
            <p>
              For exchange/return accepted request(s) (as applicable), once your
              returned product/item is received and inspected by us, we will
              send you an email to notify you about receipt of the
              returned/exchanged product. Further, if the same has been approved
              after the quality check at our end, your request (i.e.,
              return/exchange) will be processed in accordance with our
              policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;

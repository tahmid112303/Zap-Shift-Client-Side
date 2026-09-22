import { NavLink } from "react-router";

function Pricing() {
  const parcelCosts = [
    { weight: "1 kg", same: 110, different: 150 },
    { weight: "2 kg", same: 110, different: 150 },
    { weight: "3 kg", same: 110, different: 150 },
    { weight: "4 kg", same: 150, different: 230 },
    { weight: "5 kg", same: 190, different: 270 },
    { weight: "6 kg", same: 230, different: 310 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 my-10 rounded-2xl">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-secondary">
            Parcel Delivery Cost
          </h1>
          <p className="mt-2 text-slate-600">
            Check the delivery charges for your parcel.
          </p>
        </div>

        {/* Document Charges */}
        <div className="mb-6 rounded-xl border border-blue-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-blue-900">
            Document Delivery Charges
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-slate-600">Same District</p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">
                $60
              </p>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-slate-600">Different District</p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">
                $80
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Document delivery charges are fixed and do not depend on weight.
          </p>
        </div>

        {/* Pricing Calculator */}

        <div>
            

        </div>

        {/* Note */}
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-semibold text-amber-900">
            Please Note
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            The charges shown are based on the provided pricing rules.
            Additional fees, taxes, packaging charges, and weight-rounding
            rules are not included.
          </p>
        </div>

        <div className="flex justify-center mt-4">
            <NavLink to='/sendParcel' className='text-3xl underline font-bold text-secondary'>Proceed to Sending Parcel?</NavLink>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
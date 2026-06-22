interface Props {
  location: string;
  setLocation: any;

  rating: string;
  setRating: any;

  fees: string;
  setFees: any;
}

export default function FilterPanel({
  location,
  setLocation,
  rating,
  setRating,
  fees,
  setFees,
}: Props) {

  return (
    <div className="grid md:grid-cols-3 gap-4 my-4">

      <select
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
        className="border p-2 rounded"
      >
        <option value="">
          All Locations
        </option>

        <option value="Delhi">
          Delhi
        </option>

        <option value="Mumbai">
          Mumbai
        </option>

        <option value="Hyderabad">
          Hyderabad
        </option>
      </select>

      <select
        value={rating}
        onChange={(e) =>
          setRating(e.target.value)
        }
        className="border p-2 rounded"
      >
        <option value="">
          Any Rating
        </option>

        <option value="4">
          4+
        </option>

        <option value="4.5">
          4.5+
        </option>
      </select>

      <select
        value={fees}
        onChange={(e) =>
          setFees(e.target.value)
        }
        className="border p-2 rounded"
      >
        <option value="">
          Any Fees
        </option>

        <option value="200000">
          Under 2 Lakhs
        </option>

        <option value="500000">
          Under 5 Lakhs
        </option>

      </select>

    </div>
  );
}
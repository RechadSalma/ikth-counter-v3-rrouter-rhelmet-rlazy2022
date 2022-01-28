import React, { useState } from "react";

export default function IncrementComponent() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <div className="card">
                <div className="card-body text-center">
                    <h2>{number}</h2>
                    <div className="d-grid gap-2">
                        <button
                            onClick={() => setNumber(number + 1)}
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            Increment
                        </button>
                        <button
                            onClick={() => setNumber(number - 1)}
                            type="button"
                            className="btn btn-outline-secondary"
                        >
                            decrement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useId, useState } from "react";
import Card from "/app/card";
import Container from "/app/container";
import Label from "/app/label";
import TextField from "/app/text-field";

export default function Page() {
  const cardNameId = useId();
  const cardNumberId = useId();
  const cvcId = useId();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div>
      <Container>
        <Card name="Jake" number="0000000000000000" month="12" year="12" />

        <form className="mt-8 space-y-4">
          <div>
            <Label htmlFor={cardNameId} className="block">
              Cardholder name
            </Label>
            <TextField
              type="text"
              id={cardNameId}
              placeholder="e.g. Jane Appleseed"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor={cardNumberId} className="block">
              Card number
            </Label>
            <TextField
              type="text"
              id={cardNumberId}
              placeholder="e.g. 1234 5678 9123 0000"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Exp. data (MM/YY)</Label>
              <div className="grid grid-cols-2 gap-2">
                <TextField
                  type="text"
                  placeholder="MM"
                  className="w-full"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
                <TextField
                  type="text"
                  placeholder="YY"
                  className="w-full"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor={cvcId}>CVC</Label>
              <TextField
                type="text"
                id={cvcId}
                placeholder="e.g. 123"
                className="w-full"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>

          <button className="w-full rounded-lg bg-very-dark-violet p-4 text-xl text-white">
            Confirm
          </button>
        </form>
      </Container>
    </div>
  );
}

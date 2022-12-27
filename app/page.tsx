"use client";

import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import CardFront from "/app/card-front";
import Container from "/app/container";
import ImageSwitch from "/app/image-switch";
import Label from "/app/label";
import TextField from "/app/text-field";

import bgCardBack from "/public/bg-card-back.png";
import bgMainDesktop from "/public/bg-main-desktop.png";
import bgMainMobile from "/public/bg-main-mobile.png";

const MAX_CARD_NAME = 30;
const MAX_CARD_NUMBER = 16;
const MAX_CVC = 3;

interface ICard {
  cardName: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

export default function Page() {
  const { control, watch } = useForm<ICard>({
    defaultValues: {
      cardName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    },
  });

  const splitCardNumber = (number: string): string => {
    let result = "";
    let counter = 0;

    const cardLength = number.length;

    for (let i = 0; i < MAX_CARD_NUMBER; i++) {
      if (counter === 4) {
        result += " ";
        counter = 0;
      }
      if (i > cardLength - 1) {
        result += "0";
      } else {
        result += number[i];
      }
      counter++;
    }

    return result;
  };

  const splittedCardNumber = splitCardNumber(watch("cardNumber"));

  return (
    <div>
      <Container>
        <div className="relative">
          <ImageSwitch mobileSrc={bgMainMobile} desktopSrc={bgMainDesktop} />
          <div className="absolute top-5 right-4 w-4/5">
            <Image src={bgCardBack} alt="" />
            <span className="absolute top-16 right-9 mt-2.5 text-xs text-light-grayish-violet">
              {watch("cvc") || "000"}
            </span>
          </div>
        </div>

        <CardFront
          name={watch("cardName")}
          number={splittedCardNumber}
          month={watch("month")}
          year={watch("year")}
          containerClassName="-mt-32 w-4/5 ml-4"
        />
      </Container>

      <Container className="px-4">
        <form className="mt-8 space-y-4">
          <Controller
            name="cardName"
            control={control}
            render={({ field }) => (
              <TextField
                maxLength={MAX_CARD_NAME}
                label="Cardholder Name"
                placeholder="e.g. Jane Appleseed"
                {...field}
              />
            )}
          />
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <TextField
                maxLength={MAX_CARD_NUMBER}
                label="Card Number"
                placeholder="e.g. 1234 5678 9123 0000"
                {...field}
              />
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Exp. data (MM/YY)</Label>
              <div className="grid grid-cols-2 gap-2">
                <Controller
                  name="month"
                  control={control}
                  render={({ field }) => (
                    <TextField maxLength={2} placeholder="MM" {...field} />
                  )}
                />
                <Controller
                  name="year"
                  control={control}
                  render={({ field }) => (
                    <TextField maxLength={2} placeholder="YY" {...field} />
                  )}
                />
              </div>
            </div>

            <Controller
              name="cvc"
              control={control}
              render={({ field }) => (
                <TextField
                  maxLength={MAX_CVC}
                  label="CVC"
                  placeholder="e.g. 123"
                  {...field}
                />
              )}
            />
          </div>

          <button className="w-full rounded-lg bg-very-dark-violet p-4 text-xl text-white">
            Confirm
          </button>
        </form>
      </Container>
    </div>
  );
}

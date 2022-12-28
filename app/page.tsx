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

const MAX_CARD_NAME = 21;
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
    <Container>
      <div className="relative">
        {/* background */}
        <ImageSwitch mobileSrc={bgMainMobile} desktopSrc={bgMainDesktop} />
        {/* card back */}
        <div className="absolute top-5 right-4 w-4/5 drop-shadow-2xl xl:top-auto xl:right-auto xl:bottom-52 xl:ml-64 xl:w-max">
          <Image src={bgCardBack} alt="" priority />
          <span className="absolute top-16 right-9 mt-2.5 text-xs tracking-widest text-light-grayish-violet xl:top-24 xl:right-14 xl:mt-3 xl:text-base">
            {watch("cvc") || "000"}
          </span>
        </div>
        {/* card front */}
        <CardFront
          name={watch("cardName")}
          number={splittedCardNumber}
          month={watch("month")}
          year={watch("year")}
          containerClassName="-mt-32 ml-4 inline-block w-4/5 drop-shadow-2xl xl:absolute xl:top-52 xl:mt-0 xl:ml-40 xl:w-auto"
        />
      </div>

      <form className="mt-8 w-full flex-none px-4 xl:absolute xl:top-1/2 xl:left-1/2 xl:mt-0 xl:ml-24 xl:max-w-md xl:-translate-y-1/2 ">
        <div className="space-y-4 xl:space-y-6">
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
          <div className="grid grid-cols-2 gap-4 xl:gap-6">
            <div>
              <Label>Exp. data (MM/YY)</Label>
              <div className="grid grid-cols-2 gap-2 xl:gap-3">
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
        </div>

        <button className="mt-8 w-full rounded-lg bg-very-dark-violet p-4 text-xl text-white xl:mt-12">
          Confirm
        </button>
      </form>
    </Container>
  );
}

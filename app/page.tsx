"use client";

import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "/app/button";
import CardFront from "/app/card-front";
import Container from "/app/container";
import ErrorMessage from "/app/error-message";
import ImageSwitch from "/app/image-switch";
import Label from "/app/label";
import TextField from "/app/text-field";

import bgCardBack from "/public/bg-card-back.png";
import bgMainDesktop from "/public/bg-main-desktop.png";
import bgMainMobile from "/public/bg-main-mobile.png";
import iconComplete from "/public/icon-complete.svg";

const MAX_CARD_NAME = 21;
const MAX_CARD_NUMBER = 16;
const MAX_CVC = 3;

const REQUIRED_ERROR = "Can't be blank";
const NUMBER_REGEX_ERROR = "Wrong format, numbers only";
const MONTH_REGEX_ERROR = "Not a valid month";
const YEAR_REGEX_ERROR = "Not a valid year";
const CARD_LENGTH_ERROR = "Must be 12 digits";
const CVC_LENGTH_ERROR = "Must be 3 digits";

const NUMBERS_REGEX = /^[0-9]+$/;
const MONTH_REGEX = /^(0?[1-9]|1[0-2])$/;
const YEAR_REGEX = /^\d{2}$/;

interface ICard {
  cardName: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

export default function Page() {
  const {
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<ICard>({
    mode: "onChange",
    defaultValues: {
      cardName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    },
  });
  const [done, setDone] = useState(false);

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

  const onSubmit = () => {
    setDone(true);
  };

  const onContinue = () => {
    setDone(false);
    reset();
  };

  const splittedCardNumber = splitCardNumber(watch("cardNumber"));

  return (
    <Container>
      <div className="relative">
        {/* background */}
        <ImageSwitch mobileSrc={bgMainMobile} desktopSrc={bgMainDesktop} />
        {/* card back */}
        <div className="absolute top-5 right-4 w-4/5 drop-shadow-2xl xl:top-auto xl:right-auto xl:bottom-48 xl:ml-64 xl:w-max">
          <Image src={bgCardBack} alt="" priority />
          <span className="absolute top-16 right-9 mt-2.5 text-xs tracking-widest text-white xl:top-24 xl:right-14 xl:mt-3 xl:text-base">
            {watch("cvc") || "000"}
          </span>
        </div>
        {/* card front */}
        <CardFront
          name={watch("cardName")}
          number={splittedCardNumber}
          month={watch("month")}
          year={watch("year")}
          containerClassName="-mt-32 ml-4 inline-block w-4/5 drop-shadow-2xl xl:absolute xl:top-48 xl:mt-0 xl:ml-40 xl:w-auto"
        />
      </div>

      <div className="mt-8 w-full px-4 xl:absolute xl:top-1/2 xl:left-1/2 xl:ml-28 xl:mt-0 xl:max-w-md xl:-translate-y-1/2 xl:px-0">
        {!done ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 xl:space-y-6">
              <Controller
                name="cardName"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR,
                  },
                }}
                render={({ field }) => (
                  <TextField
                    maxLength={MAX_CARD_NAME}
                    label="Cardholder Name"
                    placeholder="e.g. Jane Appleseed"
                    isError={!!errors.cardName}
                    errorMessage={errors.cardName?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="cardNumber"
                control={control}
                rules={{
                  pattern: {
                    value: NUMBERS_REGEX,
                    message: NUMBER_REGEX_ERROR,
                  },
                  required: {
                    value: true,
                    message: REQUIRED_ERROR,
                  },
                  minLength: {
                    value: MAX_CARD_NUMBER,
                    message: CARD_LENGTH_ERROR,
                  },
                }}
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    maxLength={MAX_CARD_NUMBER}
                    label="Card Number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    isError={!!errors.cardNumber}
                    errorMessage={errors.cardNumber?.message}
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
                      rules={{
                        required: {
                          value: true,
                          message: REQUIRED_ERROR,
                        },
                        pattern: {
                          value: MONTH_REGEX,
                          message: MONTH_REGEX_ERROR,
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          maxLength={2}
                          isError={!!errors.month}
                          placeholder="MM"
                          {...field}
                        />
                      )}
                    />
                    <Controller
                      name="year"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: REQUIRED_ERROR,
                        },
                        pattern: {
                          value: YEAR_REGEX,
                          message: YEAR_REGEX_ERROR,
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          maxLength={2}
                          isError={!!errors.year}
                          placeholder="YY"
                          {...field}
                        />
                      )}
                    />
                  </div>
                  {errors.month || errors.year ? (
                    <ErrorMessage
                      text={errors.month?.message || errors.year?.message || ""}
                    />
                  ) : null}
                </div>

                <Controller
                  name="cvc"
                  control={control}
                  rules={{
                    pattern: {
                      value: NUMBERS_REGEX,
                      message: NUMBER_REGEX_ERROR,
                    },
                    required: {
                      value: true,
                      message: REQUIRED_ERROR,
                    },
                    minLength: {
                      value: 3,
                      message: CVC_LENGTH_ERROR,
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      maxLength={MAX_CVC}
                      label="CVC"
                      placeholder="e.g. 123"
                      isError={!!errors.cvc}
                      errorMessage={errors.cvc?.message}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>

            <Button className="mt-8 xl:mt-12">Confirm</Button>
          </form>
        ) : null}

        {/* thank you */}
        {done ? (
          <div className="flex flex-col items-center text-center">
            <Image src={iconComplete} alt="" />
            <div className="mt-8 text-3xl uppercase tracking-widest text-very-dark-violet">
              Thank you!
            </div>
            <div className="mt-3 text-dark-grayish-violet">
              We&apos;ve added your credit card details
            </div>
            <Button onClick={onContinue} className="mt-12">
              Continue
            </Button>
          </div>
        ) : null}
      </div>
    </Container>
  );
}

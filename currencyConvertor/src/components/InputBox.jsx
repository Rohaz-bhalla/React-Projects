import React, { useId, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

import "../App.css";

export function InputBox() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const amountInputId = useId();
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo();
  
  // ✅ Check if API is still loading
  if (!currencyInfo) {
    console.log("Waiting for currency data..."); // Debug
    return <p>Loading currency data...</p>; // ✅ Prevents UI from rendering prematurely
  }

  const options = Object.keys(currencyInfo); // ✅ Now `currencyInfo` is always an object

  // ✅ Swap currency values
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
  };

  // ✅ Convert currency
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <div className="form">
      <Card>
        <CardHeader>
          <CardTitle>Currency Converter</CardTitle>
          <CardDescription>Convert one currency to another</CardDescription>
        </CardHeader>

        <CardContent>
          <Input
            id={amountInputId}
            placeholder="Enter amount"
            className="input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <br />

          <Select value={from} onValueChange={setFrom}>
            <SelectTrigger className="w-[180px]">
              <SelectValue>{from}</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white"> {/* ✅ Fix transparency */}
              {options.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>

        <CardContent>
          <Button variant="outline" className="input" onClick={swap}>
            Swap
          </Button>
        </CardContent>

        <CardContent>
          <Input
            id={`${amountInputId}-converted`}
            placeholder="Converted amount"
            className="input"
            value={convertedAmount}
            disabled
          />
          <br />

          <Select value={to} onValueChange={setTo}>
            <SelectTrigger className="w-[180px]">
              <SelectValue>{to}</SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white"> {/* ✅ Fix transparency */}
              {options.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={convert}>
            Convert
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";

function ColorPicker({ colors = [], activeColor, set})
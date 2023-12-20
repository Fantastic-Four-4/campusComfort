import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";

import Iconify from "../../components/iconify";
import Scrollbar from "../../components/scrollbar";
import { ColorPicker } from "../../components/color-utils";
import { useEffect, useState } from "react";
import { distanceArray, queryStringArrayCoversion } from "../../atoms/State";
import { useDispatch } from "react-redux";
import { AllowedFor, Distance, Filter_obj, Hostel_page } from "../../store/mutation/userSlice";

// ----------------------------------------------------------------------

export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "priceDesc", label: "Price: High-Low" },
  { value: "priceAsc", label: "Price: Low-High" },
];
export const GENDER_OPTIONS = [
  "single_bed",
  "double_bed",
  "three_bed",
  "four_bed",
  "attach_washroom",
  "study_table",
  "hot_water",
  "drinking_water",
];
export const CATEGORY_OPTIONS = ["ALL", "BOYS", "GIRLS"];
export const RATING_OPTIONS = ["up4Star", "up3Star", "up2Star", "up1Star"];
export const PRICE_OPTIONS = [
  { value: "below", label: "Below $25" },
  { value: "between", label: "Between $25 - $75" },
  { value: "above", label: "Above $75" },
];
export const COLOR_OPTIONS = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];

// ----------------------------------------------------------------------

export default function ProductFilters({
  openFilter,
  onOpenFilter,
  onCloseFilter,
}) {
const dispatch=useDispatch()
  const [selectedValues, setSelectedValues] = useState([]);

  const handleFilter = (value) => {
    // Implement your filter logic here based on the selected values
    dispatch(Hostel_page(1))
    dispatch(Filter_obj(queryStringArrayCoversion(selectedValues)));
  };
useEffect(() => {
  if(selectedValues){

    handleFilter()
  }
}, [selectedValues]);
  const handleCheckboxChange = (event, value) => {
    const checked = event.target.checked;
    if (checked) {
      setSelectedValues((prevValues) => [...prevValues, value]);
    } else {
      setSelectedValues((prevValues) =>
        prevValues.filter((selectedValue) => selectedValue !== value)
      );
    }
  };
  const renderGender = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Feature</Typography>
      <FormGroup>
      {GENDER_OPTIONS.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={selectedValues.includes(item)}
              onChange={(event) => handleCheckboxChange(event, item)}
            />
          }
          label={item}
        />
      ))}
    </FormGroup>
    </Stack>
  );
  const [selectedValue, setSelectedValue] = useState('ALL');
  const [selectedDistance, setSelectedDistance] = useState('');

  const handleRadioChange = (event) => {
    if(event.target.value==="ALL"){
    dispatch(Hostel_page(1))

dispatch(AllowedFor(""))
    }else{
    dispatch(Hostel_page(1))

dispatch(AllowedFor(`&allowed_for=${event.target.value}`))

    }
    setSelectedValue(event.target.value);
  };
  const handleRadioChangeDistance = (event) => {
    dispatch(Hostel_page(1))

    if(event.target.value==="1 KM Above"){
dispatch(Distance(""))
    }else{
dispatch(Distance(`&distance_from_college=${event.target.value}`))

    }
    setSelectedDistance(event.target.value);
  };
  const renderCategory = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Category</Typography>
      <RadioGroup value={selectedValue} onChange={handleRadioChange}>
        {CATEGORY_OPTIONS.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
    </Stack>
  );
  const renderDistance = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Distance</Typography>
      <RadioGroup value={selectedDistance} onChange={handleRadioChangeDistance}>
        {distanceArray.map((item) => (
          <FormControlLabel
            key={item.label}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  const renderColors = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Colors</Typography>
      <ColorPicker
        name="colors"
        selected={[]}
        colors={COLOR_OPTIONS}
        onSelectColor={(color) => [].includes(color)}
        sx={{ maxWidth: 38 * 4 }}
      />
    </Stack>
  );

  const renderPrice = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Price</Typography>
      <RadioGroup>
        {PRICE_OPTIONS.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  const renderRating = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Rating</Typography>
      <RadioGroup>
        {RATING_OPTIONS.map((item, index) => (
          <FormControlLabel
            key={item}
            value={item}
            control={
              <Radio
                disableRipple
                color="default"
                icon={<Rating readOnly value={4 - index} />}
                checkedIcon={<Rating readOnly value={4 - index} />}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                }}
              />
            }
            label="& Up"
            sx={{
              my: 0.5,
              borderRadius: 1,
              "&:hover": { opacity: 0.48 },
            }}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" />}
        onClick={onOpenFilter}
      >
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: "none", overflow: "hidden" },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="h6" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            {renderGender}

            {renderCategory}
            {renderDistance}

            {/* {renderColors} */}

            {/* {renderPrice} */}

            {/* {renderRating} */}
          </Stack>
        </Scrollbar>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            startIcon={<Iconify icon="ic:round-clear-all" />}
          >
            Clear All
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

ProductFilters.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

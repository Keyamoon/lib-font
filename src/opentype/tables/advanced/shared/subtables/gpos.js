import { LookupType1 } from "../../lookups/gpos/lookup-type-1.js";
import { LookupType2 } from "../../lookups/gpos/lookup-type-2.js";
import { LookupType3 } from "../../lookups/gpos/lookup-type-3.js";
import { LookupType4 } from "../../lookups/gpos/lookup-type-4.js";
import { LookupType5 } from "../../lookups/gpos/lookup-type-5.js";
import { LookupType6 } from "../../lookups/gpos/lookup-type-6.js";
import { LookupType7 } from "../../lookups/gpos/lookup-type-7.js";
import { LookupType8 } from "../../lookups/gpos/lookup-type-8.js";
import { LookupType9 } from "../../lookups/gpos/lookup-type-9.js";

export default {
  buildSubtable: function (type, p) {
    const subtable = new [
      undefined,
      LookupType1,
      LookupType2,
      LookupType3,
      LookupType4,
      LookupType5,
      LookupType6,
      LookupType7,
      LookupType8,
      LookupType9,
    ][type](p);
    subtable.type = type;
    return subtable;
  },
};

Greeklish / Greekglish

Search : https://github.com/search?p=2&q=greeklish&type=Repositories

===========PHP============
PHP : https://gist.github.com/teomaragakis/7580134
https://github.com/konmavrakis/greek_to_greeklish/blob/master/script.php
https://github.com/piliop/togreeklish  ++





===========JAVASCRIPT===============
JS : https://gist.github.com/kostasx/7516158 

https://github.com/papasavva/Greeklish2Greek/blob/master/converter.js

https://github.com/kostasxyz/greeklish

https://github.com/kostasxyz/Skp-Greeklish-Slugs

https://github.com/attheodo/greeklishify/blob/master/greeklishify.js


JAVASCRIPT 

function string_to_slug(str) {

//https://gist.github.com/kostasx/7516158 
 str  = str.replace(/^\s+|\s+$/g, '') // TRIM WHITESPACE AT BOTH ENDS.
          .toLowerCase();            // CONVERT TO LOWERCASE

 const from = [ "ου", "ΟΥ", "Ού", "ού", "αυ", "ΑΥ", "Αύ", "αύ", "ευ", "ΕΥ", "Εύ", "εύ", "α", "Α", "ά", "Ά", "β", "Β", "γ", "Γ", "δ", "Δ", "ε", "Ε", "έ", "Έ", "ζ", "Ζ", "η", "Η", "ή", "Ή", "θ", "Θ", "ι", "Ι", "ί", "Ί", "ϊ", "ΐ", "Ϊ", "κ", "Κ", "λ", "Λ", "μ", "Μ", "ν", "Ν", "ξ", "Ξ", "ο", "Ο", "ό", "Ό", "π", "Π", "ρ", "Ρ", "σ", "Σ", "ς", "τ", "Τ", "υ", "Υ", "ύ", "Ύ", "ϋ", "ΰ", "Ϋ", "φ", "Φ", "χ", "Χ", "ψ", "Ψ", "ω", "Ω", "ώ", "Ώ" ];
 const to   = [ "ou", "ou", "ou", "ou", "au", "au", "au", "au", "eu", "eu", "eu", "eu", "a", "a", "a", "a", "b", "b", "g", "g", "d", "d", "e", "e", "e", "e", "z", "z", "i", "i", "i", "i", "th", "th", "i", "i", "i", "i", "i", "i", "i", "k", "k", "l", "l", "m", "m", "n", "n", "ks", "ks", "o", "o", "o", "o", "p", "p", "r", "r", "s", "s", "s", "t", "t", "y", "y", "y", "y", "y", "y", "y", "f", "f", "x", "x", "ps", "ps", "o", "o", "o", "o" ];

 for ( var i = 0; i < from.length; i++ ) {

    while( str.indexOf( from[i]) !== -1 ){

        str = str.replace( from[i], to[i] );    // CONVERT GREEK CHARACTERS TO LATIN LETTERS

    }
 
 }

 str = str.replace(/[^a-z0-9 -]/g, '') // REMOVE INVALID CHARS
         .replace(/\s+/g, '-')        // COLLAPSE WHITESPACE AND REPLACE BY DASH - 
         .replace(/-+/g, '-');        // COLLAPSE DASHES

 return str;
}



---------- Forwarded message ---------
From: giannos toula <giatoula@gmail.com>
Date: Wed, Mar 20, 2013 at 10:58 PM
Subject: greekglish_v09_20130320a.php
To: JohnTrister.edu <trister12@yahoo.com>, JJ M <johnmail0+mycode@gmail.com>, <johnmail0@yahoo.gr>


greekglish_v09_20130320a.php
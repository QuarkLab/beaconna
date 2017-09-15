package com.voidx.beacona.common;

import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.util.AttributeSet;

import com.voidx.beacona.R;

public class DefaultButton extends android.support.v7.widget.AppCompatButton {
    public DefaultButton(Context context) {
        super(context);
        applyCustomDesign();
        applyCustomFont(context);
    }

    public DefaultButton(Context context, AttributeSet attrs) {
        super(context, attrs);
        applyCustomDesign();
        applyCustomFont(context);
    }

    public DefaultButton(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        applyCustomDesign();
        applyCustomFont(context);
    }

    private void applyCustomDesign() {
        setBackgroundResource(R.drawable.app_default_button);
    }

    private void applyCustomFont(Context context) {
        Typeface customFont = FontCache.getTypeface(Font.ROBOTO_MEDIUM, context);
        setTypeface(customFont);

        setTextColor(Color.parseColor("#331F00"));
    }
}

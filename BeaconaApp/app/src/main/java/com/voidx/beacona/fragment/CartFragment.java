package com.voidx.beacona.fragment;

import android.app.Fragment;
import android.content.Context;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.RecyclerView;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.voidx.beacona.R;

public class CartFragment extends Fragment {
    private static CartFragment fragment;
    private OnFragmentInteractionListener mListener;
    private View mView;
    private Context context;

    private LinearLayout itemLinearLayout;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;

    private EditText addItemEditText;

    public CartFragment() {
        // Required empty public constructor
    }

    public static CartFragment newInstance() {
        fragment = new CartFragment();
        Bundle args = new Bundle();
        fragment.setArguments(args);
        return fragment;
    }

    public static CartFragment getInstance() {
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_map, container, false);
        mView = view;
        context = mView.getContext();

        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_cart, container, false);
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        itemLinearLayout = view.findViewById(R.id.itemRecyclerView);
        addItemEditText = view.findViewById(R.id.addItemEditText);

        itemLinearLayout.addView(getCard("Wool towel"));
        itemLinearLayout.addView(getCard("Cereal"));
        itemLinearLayout.addView(getCard("Dog food"));
    }

    // TODO: Rename method, update argument and hook method into UI event
    public void onButtonPressed(Uri uri) {
        if (mListener != null) {
            mListener.onSearchFragmentInteraction(uri);
        }
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        if (context instanceof OnFragmentInteractionListener) {
            mListener = (OnFragmentInteractionListener) context;
        } else {
            throw new RuntimeException(context.toString()
                    + " must implement OnFragmentInteractionListener");
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        mListener = null;
    }

    /**
     * This interface must be implemented by activities that contain this
     * fragment to allow an interaction in this fragment to be communicated
     * to the activity and potentially other fragments contained in that
     * activity.
     * <p>
     * See the Android Training lesson <a href=
     * "http://developer.android.com/training/basics/fragments/communicating.html"
     * >Communicating with Other Fragments</a> for more information.
     */
    public interface OnFragmentInteractionListener {
        // TODO: Update argument type and name
        void onSearchFragmentInteraction(Uri uri);
    }

    private LinearLayout getCard(String content){
        final TextView textView = new TextView(context);
        textView.setText(content);

        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(1000, LinearLayout.LayoutParams.WRAP_CONTENT);
        params.setMargins(100,10,20,10);

        textView.setPadding(50, 25, 50, 25);

        textView.setLayoutParams(params);
        textView.setTextSize(20);
        textView.setTextColor(0xFFFFFFFF);

        GradientDrawable gd = new GradientDrawable();
        gd.setColor(0xFF4874A8);
        gd.setCornerRadius(16);
        gd.setStroke(1, 0xFF000000);
        textView.setBackgroundDrawable(gd);

        Button closeButton = new Button(context);
        closeButton.setText("X");
        closeButton.setTextSize(20);
        closeButton.setTextColor(0xFFFFFFFF);
        LinearLayout.LayoutParams pButton = new LinearLayout.LayoutParams(100, 100);
        pButton.setMargins(5,5,5,5);
        closeButton.setLayoutParams(pButton);
        closeButton.setPadding(5, 5, 5, 5);

        GradientDrawable gd2 = new GradientDrawable();
        gd2.setColor(0xFFE57373);
        gd2.setCornerRadius(16);
        gd2.setStroke(1, 0xFF000000);
        closeButton.setBackgroundDrawable(gd2);


        final LinearLayout linearlayout = new LinearLayout(context);
        linearlayout.setOrientation(LinearLayout.HORIZONTAL);
        LinearLayout.LayoutParams linearlayoutlayoutparams = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT);
        linearlayout.setLayoutParams(linearlayoutlayoutparams);

        linearlayout.addView(textView);
        linearlayout.addView(closeButton);

        closeButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                itemLinearLayout.removeView(linearlayout);
            }
        });

        return linearlayout;
    }

    public String getAddItemText() {
        return addItemEditText.getText().toString();
    }

    public void addCard(String content){
        itemLinearLayout.addView(getCard(content));
    }

    public void clearAdd(){
        addItemEditText.setText("");
    }
}
